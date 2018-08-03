declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                abstract class AtomicLongFieldUpdater<T> {
                    public static newUpdater<U>(arg0: java.lang.Class<U>, arg1: java.lang.String | string): java.util.concurrent.atomic.AtomicLongFieldUpdater<U>
                    protected constructor()
                    public abstract compareAndSet<U>(arg0: T, arg1: long, arg2: long): boolean
                    public abstract weakCompareAndSet<U>(arg0: T, arg1: long, arg2: long): boolean
                    public abstract set<U>(arg0: T, arg1: long): void
                    public abstract lazySet<U>(arg0: T, arg1: long): void
                    public abstract get<U>(arg0: T): long
                    public getAndSet<U>(arg0: T, arg1: long): long
                    public getAndIncrement<U>(arg0: T): long
                    public getAndDecrement<U>(arg0: T): long
                    public getAndAdd<U>(arg0: T, arg1: long): long
                    public incrementAndGet<U>(arg0: T): long
                    public decrementAndGet<U>(arg0: T): long
                    public addAndGet<U>(arg0: T, arg1: long): long
                    public getAndUpdate<U>(arg0: T, arg1: java.util.function$.LongUnaryOperator): long
                    public updateAndGet<U>(arg0: T, arg1: java.util.function$.LongUnaryOperator): long
                    public getAndAccumulate<U>(arg0: T, arg1: long, arg2: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): long
                    public accumulateAndGet<U>(arg0: T, arg1: long, arg2: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): long
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}