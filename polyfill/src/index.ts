const secureRandom = new java.security.SecureRandom()
const that = global as any

that.self = global
that.innerWidth = 0
that.innerHeight = 0

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

that.crypto = {
    getRandomValues(array: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array) {
        for (let i = 0; i < array.length; i++) {
            switch (array.constructor.name) {
                case "Int8Array":
                    array[i] = secureRandom.nextInt(256) - 128
                    break
                case "Uint8Array":
                    array[i] = secureRandom.nextInt(256)
                    break
                case "Int16Array":
                    array[i] = secureRandom.nextInt(Math.pow(2, 16)) - Math.pow(2, 15)
                    break
                case "Uint16Array":
                    array[i] = secureRandom.nextInt(Math.pow(2, 16))
                    break
                case "Int32Array":
                    array[i] = secureRandom.nextLong() % Math.pow(2, 32) - Math.pow(2, 31)
                    break
                case "Uint32Array":
                    array[i] = secureRandom.nextLong() % Math.pow(2, 32)
                    break
                default:
                    array[i] = secureRandom.nextInt(256)
            }
        }
        return array
    }
}
