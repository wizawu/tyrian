declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                abstract class AtomicReferenceFieldUpdater<T, V> {
                    public static newUpdater<U, W>(arg0: java.lang.Class<U>, arg1: java.lang.Class<W>, arg2: java.lang.String | string): java.util.concurrent.atomic.AtomicReferenceFieldUpdater<U, W>
                    protected constructor()
                    public compareAndSet(arg0: T, arg1: V, arg2: V): boolean
                    public weakCompareAndSet(arg0: T, arg1: V, arg2: V): boolean
                    public set(arg0: T, arg1: V): void
                    public lazySet(arg0: T, arg1: V): void
                    public get(arg0: T): V
                    public getAndSet(arg0: T, arg1: V): V
                    public getAndUpdate(arg0: T, arg1: java.util.function$.UnaryOperator<V> | java.util.function$.UnaryOperator$$Lambda<V>): V
                    public updateAndGet(arg0: T, arg1: java.util.function$.UnaryOperator<V> | java.util.function$.UnaryOperator$$Lambda<V>): V
                    public getAndAccumulate(arg0: T, arg1: V, arg2: java.util.function$.BinaryOperator<V>): V
                    public accumulateAndGet(arg0: T, arg1: V, arg2: java.util.function$.BinaryOperator<V>): V
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}