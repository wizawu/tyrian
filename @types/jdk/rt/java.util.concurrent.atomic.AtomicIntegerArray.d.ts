declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
class AtomicIntegerArray implements java.io.Serializable {
    public constructor(arg0: int)
    public constructor(arg0: int[])
    public length(): int
    public get(arg0: int): int
    public set(arg0: int, arg1: int): void
    public lazySet(arg0: int, arg1: int): void
    public getAndSet(arg0: int, arg1: int): int
    public compareAndSet(arg0: int, arg1: int, arg2: int): boolean
    public weakCompareAndSet(arg0: int, arg1: int, arg2: int): boolean
    public getAndIncrement(arg0: int): int
    public getAndDecrement(arg0: int): int
    public getAndAdd(arg0: int, arg1: int): int
    public incrementAndGet(arg0: int): int
    public decrementAndGet(arg0: int): int
    public addAndGet(arg0: int, arg1: int): int
    public getAndUpdate(arg0: int, arg1: java.util.function$.IntUnaryOperator): int
    public updateAndGet(arg0: int, arg1: java.util.function$.IntUnaryOperator): int
    public getAndAccumulate(arg0: int, arg1: int, arg2: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): int
    public accumulateAndGet(arg0: int, arg1: int, arg2: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): int
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}