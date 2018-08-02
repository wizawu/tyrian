declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
interface Condition {
    await(): void
    awaitUninterruptibly(): void
    awaitNanos(arg0: long): long
    await(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
    awaitUntil(arg0: java.util.Date): boolean
    signal(): void
    signalAll(): void
}

            }
        }
    }
}