declare namespace java {
    namespace util {
        namespace concurrent {
            interface BlockingQueue<E> extends java.util.Queue<E> {
                add(arg0: E): boolean
                offer(arg0: E): boolean
                put(arg0: E): void
                offer(arg0: E, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
                take(): E
                poll(arg0: long, arg1: java.util.concurrent.TimeUnit): E
                remainingCapacity(): int
                remove(arg0: java.lang.Object): boolean
                contains(arg0: java.lang.Object): boolean
                drainTo(arg0: java.util.Collection<E>): int
                drainTo(arg0: java.util.Collection<E>, arg1: int): int
            }
        }
    }
}