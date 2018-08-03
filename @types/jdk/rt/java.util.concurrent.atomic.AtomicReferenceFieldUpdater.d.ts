declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                abstract class AtomicReferenceFieldUpdater<T, V> {
                    public static newUpdater<U, W>(arg0: java.lang.Class<U>, arg1: java.lang.Class<W>, arg2: java.lang.String | string): java.util.concurrent.atomic.AtomicReferenceFieldUpdater<U, W>
                    protected constructor()
                    public abstract compareAndSet<U, W>(arg0: T, arg1: V, arg2: V): boolean
                    public abstract weakCompareAndSet<U, W>(arg0: T, arg1: V, arg2: V): boolean
                    public abstract set<U, W>(arg0: T, arg1: V): void
                    public abstract lazySet<U, W>(arg0: T, arg1: V): void
                    public abstract get<U, W>(arg0: T): V
                    public getAndSet<U, W>(arg0: T, arg1: V): V
                    public getAndUpdate<U, W>(arg0: T, arg1: java.util.function$.UnaryOperator<V>): V
                    public updateAndGet<U, W>(arg0: T, arg1: java.util.function$.UnaryOperator<V>): V
                    public getAndAccumulate<U, W>(arg0: T, arg1: V, arg2: java.util.function$.BinaryOperator<V>): V
                    public accumulateAndGet<U, W>(arg0: T, arg1: V, arg2: java.util.function$.BinaryOperator<V>): V
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}