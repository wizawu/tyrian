declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                class AtomicLong extends java.lang.Number implements java.io.Serializable {
                    public constructor(arg0: long)
                    public constructor()
                    public get(): long
                    public set(arg0: long): void
                    public lazySet(arg0: long): void
                    public getAndSet(arg0: long): long
                    public compareAndSet(arg0: long, arg1: long): boolean
                    public weakCompareAndSet(arg0: long, arg1: long): boolean
                    public getAndIncrement(): long
                    public getAndDecrement(): long
                    public getAndAdd(arg0: long): long
                    public incrementAndGet(): long
                    public decrementAndGet(): long
                    public addAndGet(arg0: long): long
                    public getAndUpdate(arg0: java.util.function$.LongUnaryOperator): long
                    public updateAndGet(arg0: java.util.function$.LongUnaryOperator): long
                    public getAndAccumulate(arg0: long, arg1: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): long
                    public accumulateAndGet(arg0: long, arg1: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): long
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