declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                abstract class AtomicIntegerFieldUpdater<T> {
                    public static newUpdater<U>(arg0: java.lang.Class<U>, arg1: java.lang.String | string): java.util.concurrent.atomic.AtomicIntegerFieldUpdater<U>
                    protected constructor()
                    public abstract compareAndSet<U>(arg0: T, arg1: int, arg2: int): boolean
                    public abstract weakCompareAndSet<U>(arg0: T, arg1: int, arg2: int): boolean
                    public abstract set<U>(arg0: T, arg1: int): void
                    public abstract lazySet<U>(arg0: T, arg1: int): void
                    public abstract get<U>(arg0: T): int
                    public getAndSet<U>(arg0: T, arg1: int): int
                    public getAndIncrement<U>(arg0: T): int
                    public getAndDecrement<U>(arg0: T): int
                    public getAndAdd<U>(arg0: T, arg1: int): int
                    public incrementAndGet<U>(arg0: T): int
                    public decrementAndGet<U>(arg0: T): int
                    public addAndGet<U>(arg0: T, arg1: int): int
                    public getAndUpdate<U>(arg0: T, arg1: java.util.function$.IntUnaryOperator): int
                    public updateAndGet<U>(arg0: T, arg1: java.util.function$.IntUnaryOperator): int
                    public getAndAccumulate<U>(arg0: T, arg1: int, arg2: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): int
                    public accumulateAndGet<U>(arg0: T, arg1: int, arg2: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}