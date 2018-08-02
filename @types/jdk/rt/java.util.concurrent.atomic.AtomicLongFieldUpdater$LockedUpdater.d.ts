declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                class AtomicLongFieldUpdater$LockedUpdater<T> extends java.util.concurrent.atomic.AtomicLongFieldUpdater<T> {
                    public compareAndSet(arg0: T, arg1: long, arg2: long): boolean
                    public weakCompareAndSet(arg0: T, arg1: long, arg2: long): boolean
                    public set(arg0: T, arg1: long): void
                    public lazySet(arg0: T, arg1: long): void
                    public get(arg0: T): long
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}