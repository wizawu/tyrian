declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                class AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl<T, V> extends java.util.concurrent.atomic.AtomicReferenceFieldUpdater<T, V> {
                    public compareAndSet(arg0: T, arg1: V, arg2: V): boolean
                    public weakCompareAndSet(arg0: T, arg1: V, arg2: V): boolean
                    public set(arg0: T, arg1: V): void
                    public lazySet(arg0: T, arg1: V): void
                    public get(arg0: T): V
                    public getAndSet(arg0: T, arg1: V): V
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}