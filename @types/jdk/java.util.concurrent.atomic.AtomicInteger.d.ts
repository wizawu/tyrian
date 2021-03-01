declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicInteger extends java.lang.Number implements java.io.Serializable {

          public constructor(arg0: int)
          public constructor()
          public readonly get(): int
          public readonly set(arg0: int): void
          public readonly lazySet(arg0: int): void
          public readonly getAndSet(arg0: int): int
          public readonly compareAndSet(arg0: int, arg1: int): boolean
          public readonly weakCompareAndSet(arg0: int, arg1: int): boolean
          public readonly weakCompareAndSetPlain(arg0: int, arg1: int): boolean
          public readonly getAndIncrement(): int
          public readonly getAndDecrement(): int
          public readonly getAndAdd(arg0: int): int
          public readonly incrementAndGet(): int
          public readonly decrementAndGet(): int
          public readonly addAndGet(arg0: int): int
          public readonly getAndUpdate(arg0: java.util.function$.IntUnaryOperator): int
          public readonly updateAndGet(arg0: java.util.function$.IntUnaryOperator): int
          public readonly getAndAccumulate(arg0: int, arg1: java.util.function$.IntBinaryOperator): int
          public readonly accumulateAndGet(arg0: int, arg1: java.util.function$.IntBinaryOperator): int
          public toString(): java.lang.String
          public intValue(): int
          public longValue(): long
          public floatValue(): float
          public doubleValue(): double
          public readonly getPlain(): int
          public readonly setPlain(arg0: int): void
          public readonly getOpaque(): int
          public readonly setOpaque(arg0: int): void
          public readonly getAcquire(): int
          public readonly setRelease(arg0: int): void
          public readonly compareAndExchange(arg0: int, arg1: int): int
          public readonly compareAndExchangeAcquire(arg0: int, arg1: int): int
          public readonly compareAndExchangeRelease(arg0: int, arg1: int): int
          public readonly weakCompareAndSetVolatile(arg0: int, arg1: int): boolean
          public readonly weakCompareAndSetAcquire(arg0: int, arg1: int): boolean
          public readonly weakCompareAndSetRelease(arg0: int, arg1: int): boolean
        }

      }
    }
  }
}
