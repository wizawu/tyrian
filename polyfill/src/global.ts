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

that.setInterval = (runnable: Function, period) => {
    let executor = new java.util.concurrent.ScheduledThreadPoolExecutor(1)
    executor.scheduleAtFixedRate(runnable as any, period, period, java.util.concurrent.TimeUnit.MILLISECONDS)
    return executor
}

that.clearInterval = (executor: java.util.concurrent.ScheduledThreadPoolExecutor) => {
    if (!executor.isShutdown()) executor.shutdown()
}
