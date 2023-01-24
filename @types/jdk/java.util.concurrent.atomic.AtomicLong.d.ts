declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {
        class AtomicLong extends java.lang.Number implements java.io.Serializable {
          static readonly VM_SUPPORTS_LONG_CAS: boolean
          public constructor(arg0: number | java.lang.Long)
          public constructor()
          public get(): number
          public set(arg0: number | java.lang.Long): void
          public lazySet(arg0: number | java.lang.Long): void
          public getAndSet(arg0: number | java.lang.Long): number
          public compareAndSet(arg0: number | java.lang.Long, arg1: number | java.lang.Long): boolean
          public weakCompareAndSet(arg0: number | java.lang.Long, arg1: number | java.lang.Long): boolean
          public weakCompareAndSetPlain(arg0: number | java.lang.Long, arg1: number | java.lang.Long): boolean
          public getAndIncrement(): number
          public getAndDecrement(): number
          public getAndAdd(arg0: number | java.lang.Long): number
          public incrementAndGet(): number
          public decrementAndGet(): number
          public addAndGet(arg0: number | java.lang.Long): number
          public getAndUpdate(arg0: java.util.function$.LongUnaryOperator): number
          public updateAndGet(arg0: java.util.function$.LongUnaryOperator): number
          public getAndAccumulate(
            arg0: number | java.lang.Long,
            arg1: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$lambda
          ): number
          public accumulateAndGet(
            arg0: number | java.lang.Long,
            arg1: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$lambda
          ): number
          public toString(): java.lang.String
          public intValue(): number
          public longValue(): number
          public floatValue(): number
          public doubleValue(): number
          public getPlain(): number
          public setPlain(arg0: number | java.lang.Long): void
          public getOpaque(): number
          public setOpaque(arg0: number | java.lang.Long): void
          public getAcquire(): number
          public setRelease(arg0: number | java.lang.Long): void
          public compareAndExchange(arg0: number | java.lang.Long, arg1: number | java.lang.Long): number
          public compareAndExchangeAcquire(arg0: number | java.lang.Long, arg1: number | java.lang.Long): number
          public compareAndExchangeRelease(arg0: number | java.lang.Long, arg1: number | java.lang.Long): number
          public weakCompareAndSetVolatile(arg0: number | java.lang.Long, arg1: number | java.lang.Long): boolean
          public weakCompareAndSetAcquire(arg0: number | java.lang.Long, arg1: number | java.lang.Long): boolean
          public weakCompareAndSetRelease(arg0: number | java.lang.Long, arg1: number | java.lang.Long): boolean
        }
      }
    }
  }
}
