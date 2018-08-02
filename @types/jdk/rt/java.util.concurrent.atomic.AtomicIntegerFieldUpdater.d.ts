declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
abstract class AtomicIntegerFieldUpdater<T> {
    public static newUpdater<U>(arg0: java.lang.Class<U>, arg1: java.lang.String | string): java.util.concurrent.atomic.AtomicIntegerFieldUpdater<U>
    protected constructor()
    public compareAndSet(arg0: T, arg1: int, arg2: int): boolean
    public weakCompareAndSet(arg0: T, arg1: int, arg2: int): boolean
    public set(arg0: T, arg1: int): void
    public lazySet(arg0: T, arg1: int): void
    public get(arg0: T): int
    public getAndSet(arg0: T, arg1: int): int
    public getAndIncrement(arg0: T): int
    public getAndDecrement(arg0: T): int
    public getAndAdd(arg0: T, arg1: int): int
    public incrementAndGet(arg0: T): int
    public decrementAndGet(arg0: T): int
    public addAndGet(arg0: T, arg1: int): int
    public getAndUpdate(arg0: T, arg1: java.util.function$.IntUnaryOperator): int
    public updateAndGet(arg0: T, arg1: java.util.function$.IntUnaryOperator): int
    public getAndAccumulate(arg0: T, arg1: int, arg2: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): int
    public accumulateAndGet(arg0: T, arg1: int, arg2: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): int
    public static class: java.lang.Class<any>
}

            }
        }
    }
}