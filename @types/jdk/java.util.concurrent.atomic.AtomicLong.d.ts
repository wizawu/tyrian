declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicLong extends java.lang.Number implements java.io.Serializable {

          static readonly VM_SUPPORTS_LONG_CAS: boolean
          public constructor(arg0: long)
          public constructor()
          public readonly get(): long
          public readonly set(arg0: long): void
          public readonly lazySet(arg0: long): void
          public readonly getAndSet(arg0: long): long
          public readonly compareAndSet(arg0: long, arg1: long): boolean
          public readonly weakCompareAndSet(arg0: long, arg1: long): boolean
          public readonly weakCompareAndSetPlain(arg0: long, arg1: long): boolean
          public readonly getAndIncrement(): long
          public readonly getAndDecrement(): long
          public readonly getAndAdd(arg0: long): long
          public readonly incrementAndGet(): long
          public readonly decrementAndGet(): long
          public readonly addAndGet(arg0: long): long
          public readonly getAndUpdate(arg0: java.util.function$.LongUnaryOperator): long
          public readonly updateAndGet(arg0: java.util.function$.LongUnaryOperator): long
          public readonly getAndAccumulate(arg0: long, arg1: java.util.function$.LongBinaryOperator): long
          public readonly accumulateAndGet(arg0: long, arg1: java.util.function$.LongBinaryOperator): long
          public toString(): java.lang.String
          public intValue(): int
          public longValue(): long
          public floatValue(): float
          public doubleValue(): double
          public readonly getPlain(): long
          public readonly setPlain(arg0: long): void
          public readonly getOpaque(): long
          public readonly setOpaque(arg0: long): void
          public readonly getAcquire(): long
          public readonly setRelease(arg0: long): void
          public readonly compareAndExchange(arg0: long, arg1: long): long
          public readonly compareAndExchangeAcquire(arg0: long, arg1: long): long
          public readonly compareAndExchangeRelease(arg0: long, arg1: long): long
          public readonly weakCompareAndSetVolatile(arg0: long, arg1: long): boolean
          public readonly weakCompareAndSetAcquire(arg0: long, arg1: long): boolean
          public readonly weakCompareAndSetRelease(arg0: long, arg1: long): boolean
        }

      }
    }
  }
}
