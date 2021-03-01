declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicIntegerArray implements java.io.Serializable {

          public constructor(arg0: int)
          public constructor(arg0: int[])
          public readonly length(): int
          public readonly get(arg0: int): int
          public readonly set(arg0: int, arg1: int): void
          public readonly lazySet(arg0: int, arg1: int): void
          public readonly getAndSet(arg0: int, arg1: int): int
          public readonly compareAndSet(arg0: int, arg1: int, arg2: int): boolean
          public readonly weakCompareAndSet(arg0: int, arg1: int, arg2: int): boolean
          public readonly weakCompareAndSetPlain(arg0: int, arg1: int, arg2: int): boolean
          public readonly getAndIncrement(arg0: int): int
          public readonly getAndDecrement(arg0: int): int
          public readonly getAndAdd(arg0: int, arg1: int): int
          public readonly incrementAndGet(arg0: int): int
          public readonly decrementAndGet(arg0: int): int
          public readonly addAndGet(arg0: int, arg1: int): int
          public readonly getAndUpdate(arg0: int, arg1: java.util.function$.IntUnaryOperator): int
          public readonly updateAndGet(arg0: int, arg1: java.util.function$.IntUnaryOperator): int
          public readonly getAndAccumulate(arg0: int, arg1: int, arg2: java.util.function$.IntBinaryOperator): int
          public readonly accumulateAndGet(arg0: int, arg1: int, arg2: java.util.function$.IntBinaryOperator): int
          public toString(): java.lang.String
          public readonly getPlain(arg0: int): int
          public readonly setPlain(arg0: int, arg1: int): void
          public readonly getOpaque(arg0: int): int
          public readonly setOpaque(arg0: int, arg1: int): void
          public readonly getAcquire(arg0: int): int
          public readonly setRelease(arg0: int, arg1: int): void
          public readonly compareAndExchange(arg0: int, arg1: int, arg2: int): int
          public readonly compareAndExchangeAcquire(arg0: int, arg1: int, arg2: int): int
          public readonly compareAndExchangeRelease(arg0: int, arg1: int, arg2: int): int
          public readonly weakCompareAndSetVolatile(arg0: int, arg1: int, arg2: int): boolean
          public readonly weakCompareAndSetAcquire(arg0: int, arg1: int, arg2: int): boolean
          public readonly weakCompareAndSetRelease(arg0: int, arg1: int, arg2: int): boolean
        }

      }
    }
  }
}
