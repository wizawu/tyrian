declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicLong extends java.lang.Number implements java.io.Serializable {
          static readonly VM_SUPPORTS_LONG_CAS: boolean
          public constructor(arg0: long)
          public constructor()
          public get(): long
          public set(arg0: long): void
          public lazySet(arg0: long): void
          public getAndSet(arg0: long): long
          public compareAndSet(arg0: long, arg1: long): boolean
          public weakCompareAndSet(arg0: long, arg1: long): boolean
          public weakCompareAndSetPlain(arg0: long, arg1: long): boolean
          public getAndIncrement(): long
          public getAndDecrement(): long
          public getAndAdd(arg0: long): long
          public incrementAndGet(): long
          public decrementAndGet(): long
          public addAndGet(arg0: long): long
          public getAndUpdate(arg0: java.util.function$.LongUnaryOperator): long
          public updateAndGet(arg0: java.util.function$.LongUnaryOperator): long
          public getAndAccumulate(arg0: long, arg1: java.util.function$.LongBinaryOperator): long
          public accumulateAndGet(arg0: long, arg1: java.util.function$.LongBinaryOperator): long
          public toString(): java.lang.String
          public intValue(): int
          public longValue(): long
          public floatValue(): float
          public doubleValue(): double
          public getPlain(): long
          public setPlain(arg0: long): void
          public getOpaque(): long
          public setOpaque(arg0: long): void
          public getAcquire(): long
          public setRelease(arg0: long): void
          public compareAndExchange(arg0: long, arg1: long): long
          public compareAndExchangeAcquire(arg0: long, arg1: long): long
          public compareAndExchangeRelease(arg0: long, arg1: long): long
          public weakCompareAndSetVolatile(arg0: long, arg1: long): boolean
          public weakCompareAndSetAcquire(arg0: long, arg1: long): boolean
          public weakCompareAndSetRelease(arg0: long, arg1: long): boolean
        }

      }
    }
  }
}
