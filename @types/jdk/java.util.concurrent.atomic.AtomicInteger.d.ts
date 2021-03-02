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
          public weakCompareAndSetPlain(arg0: int, arg1: int): boolean
          public getAndIncrement(): int
          public getAndDecrement(): int
          public getAndAdd(arg0: int): int
          public incrementAndGet(): int
          public decrementAndGet(): int
          public addAndGet(arg0: int): int
          public getAndUpdate(arg0: java.util.function$.IntUnaryOperator): int
          public updateAndGet(arg0: java.util.function$.IntUnaryOperator): int
          public getAndAccumulate(arg0: int, arg1: java.util.function$.IntBinaryOperator): int
          public accumulateAndGet(arg0: int, arg1: java.util.function$.IntBinaryOperator): int
          public toString(): java.lang.String
          public intValue(): int
          public longValue(): long
          public floatValue(): float
          public doubleValue(): double
          public getPlain(): int
          public setPlain(arg0: int): void
          public getOpaque(): int
          public setOpaque(arg0: int): void
          public getAcquire(): int
          public setRelease(arg0: int): void
          public compareAndExchange(arg0: int, arg1: int): int
          public compareAndExchangeAcquire(arg0: int, arg1: int): int
          public compareAndExchangeRelease(arg0: int, arg1: int): int
          public weakCompareAndSetVolatile(arg0: int, arg1: int): boolean
          public weakCompareAndSetAcquire(arg0: int, arg1: int): boolean
          public weakCompareAndSetRelease(arg0: int, arg1: int): boolean
        }

      }
    }
  }
}
