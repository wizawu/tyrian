declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                abstract class AtomicLongFieldUpdater<T> {
                    public static newUpdater<U>(arg0: java.lang.Class<U>, arg1: java.lang.String | string): java.util.concurrent.atomic.AtomicLongFieldUpdater<U>
                    protected constructor()
                    public compareAndSet(arg0: T, arg1: long, arg2: long): boolean
                    public weakCompareAndSet(arg0: T, arg1: long, arg2: long): boolean
                    public set(arg0: T, arg1: long): void
                    public lazySet(arg0: T, arg1: long): void
                    public get(arg0: T): long
                    public getAndSet(arg0: T, arg1: long): long
                    public getAndIncrement(arg0: T): long
                    public getAndDecrement(arg0: T): long
                    public getAndAdd(arg0: T, arg1: long): long
                    public incrementAndGet(arg0: T): long
                    public decrementAndGet(arg0: T): long
                    public addAndGet(arg0: T, arg1: long): long
                    public getAndUpdate(arg0: T, arg1: java.util.function$.LongUnaryOperator): long
                    public updateAndGet(arg0: T, arg1: java.util.function$.LongUnaryOperator): long
                    public getAndAccumulate(arg0: T, arg1: long, arg2: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): long
                    public accumulateAndGet(arg0: T, arg1: long, arg2: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): long
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}