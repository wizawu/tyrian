declare const global: any
export const that = global

that.self = global

that.console = {
    log(message) {
        java.lang.System.out.println(message)
    },
    error(message) {
        java.lang.System.err.println(message)
    },
}

that.setTimeout = (runnable: Function, delay = 0) => {
    let thread = new java.lang.Thread(() => {
        java.lang.Thread.sleep(delay)
        runnable()
    })
    thread.start()
    return thread
}

that.clearTimeout = (thread: java.lang.Thread) => {
    try {
        if (thread.isAlive()) thread.stop()
    } catch (ignored) {
    }
    thread.join()
}
