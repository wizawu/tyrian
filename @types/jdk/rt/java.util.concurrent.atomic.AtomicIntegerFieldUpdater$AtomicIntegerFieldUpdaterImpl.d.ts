declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                class AtomicIntegerFieldUpdater$AtomicIntegerFieldUpdaterImpl<T> extends java.util.concurrent.atomic.AtomicIntegerFieldUpdater<T> {
                    public compareAndSet(arg0: T, arg1: int, arg2: int): boolean
                    public weakCompareAndSet(arg0: T, arg1: int, arg2: int): boolean
                    public set(arg0: T, arg1: int): void
                    public lazySet(arg0: T, arg1: int): void
                    public get(arg0: T): int
                    public getAndSet(arg0: T, arg1: int): int
                    public getAndAdd(arg0: T, arg1: int): int
                    public getAndIncrement(arg0: T): int
                    public getAndDecrement(arg0: T): int
                    public incrementAndGet(arg0: T): int
                    public decrementAndGet(arg0: T): int
                    public addAndGet(arg0: T, arg1: int): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}