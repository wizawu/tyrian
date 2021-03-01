declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicLongArray implements java.io.Serializable {

          public constructor(arg0: int)
          public constructor(arg0: long[])
          public readonly length(): int
          public readonly get(arg0: int): long
          public readonly set(arg0: int, arg1: long): void
          public readonly lazySet(arg0: int, arg1: long): void
          public readonly getAndSet(arg0: int, arg1: long): long
          public readonly compareAndSet(arg0: int, arg1: long, arg2: long): boolean
          public readonly weakCompareAndSet(arg0: int, arg1: long, arg2: long): boolean
          public readonly weakCompareAndSetPlain(arg0: int, arg1: long, arg2: long): boolean
          public readonly getAndIncrement(arg0: int): long
          public readonly getAndDecrement(arg0: int): long
          public readonly getAndAdd(arg0: int, arg1: long): long
          public readonly incrementAndGet(arg0: int): long
          public readonly decrementAndGet(arg0: int): long
          public addAndGet(arg0: int, arg1: long): long
          public readonly getAndUpdate(arg0: int, arg1: java.util.function$.LongUnaryOperator): long
          public readonly updateAndGet(arg0: int, arg1: java.util.function$.LongUnaryOperator): long
          public readonly getAndAccumulate(arg0: int, arg1: long, arg2: java.util.function$.LongBinaryOperator): long
          public readonly accumulateAndGet(arg0: int, arg1: long, arg2: java.util.function$.LongBinaryOperator): long
          public toString(): java.lang.String
          public readonly getPlain(arg0: int): long
          public readonly setPlain(arg0: int, arg1: long): void
          public readonly getOpaque(arg0: int): long
          public readonly setOpaque(arg0: int, arg1: long): void
          public readonly getAcquire(arg0: int): long
          public readonly setRelease(arg0: int, arg1: long): void
          public readonly compareAndExchange(arg0: int, arg1: long, arg2: long): long
          public readonly compareAndExchangeAcquire(arg0: int, arg1: long, arg2: long): long
          public readonly compareAndExchangeRelease(arg0: int, arg1: long, arg2: long): long
          public readonly weakCompareAndSetVolatile(arg0: int, arg1: long, arg2: long): boolean
          public readonly weakCompareAndSetAcquire(arg0: int, arg1: long, arg2: long): boolean
          public readonly weakCompareAndSetRelease(arg0: int, arg1: long, arg2: long): boolean
        }

      }
    }
  }
}
