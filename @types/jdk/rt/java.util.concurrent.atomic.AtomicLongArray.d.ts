declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
class AtomicLongArray implements java.io.Serializable {
    public constructor(arg0: int)
    public constructor(arg0: long[])
    public length(): int
    public get(arg0: int): long
    public set(arg0: int, arg1: long): void
    public lazySet(arg0: int, arg1: long): void
    public getAndSet(arg0: int, arg1: long): long
    public compareAndSet(arg0: int, arg1: long, arg2: long): boolean
    public weakCompareAndSet(arg0: int, arg1: long, arg2: long): boolean
    public getAndIncrement(arg0: int): long
    public getAndDecrement(arg0: int): long
    public getAndAdd(arg0: int, arg1: long): long
    public incrementAndGet(arg0: int): long
    public decrementAndGet(arg0: int): long
    public addAndGet(arg0: int, arg1: long): long
    public getAndUpdate(arg0: int, arg1: java.util.function$.LongUnaryOperator): long
    public updateAndGet(arg0: int, arg1: java.util.function$.LongUnaryOperator): long
    public getAndAccumulate(arg0: int, arg1: long, arg2: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): long
    public accumulateAndGet(arg0: int, arg1: long, arg2: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): long
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}