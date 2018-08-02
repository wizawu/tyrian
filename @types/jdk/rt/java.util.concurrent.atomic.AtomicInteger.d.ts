declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                class AtomicInteger extends java.lang.Number implements java.io.Serializable {
                    public constructor(arg0: int)
                    public constructor()
                    public get(): int
                    public set(arg0: int): void
                    public lazySet(arg0: int): void
                    public getAndSet(arg0: int): int
                    public compareAndSet(arg0: int, arg1: int): boolean
                    public weakCompareAndSet(arg0: int, arg1: int): boolean
                    public getAndIncrement(): int
                    public getAndDecrement(): int
                    public getAndAdd(arg0: int): int
                    public incrementAndGet(): int
                    public decrementAndGet(): int
                    public addAndGet(arg0: int): int
                    public getAndUpdate(arg0: java.util.function$.IntUnaryOperator): int
                    public updateAndGet(arg0: java.util.function$.IntUnaryOperator): int
                    public getAndAccumulate(arg0: int, arg1: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): int
                    public accumulateAndGet(arg0: int, arg1: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): int
                    public toString(): string
                    public intValue(): int
                    public longValue(): long
                    public floatValue(): float
                    public doubleValue(): double
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}