declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicIntegerArray implements java.io.Serializable {
          public constructor(arg0: number | java.lang.Integer)
          public constructor(arg0: int[])
          public length(): number
          public get(arg0: number | java.lang.Integer): number
          public set(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
          public lazySet(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
          public getAndSet(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
          public compareAndSet(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): boolean
          public weakCompareAndSet(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): boolean
          public weakCompareAndSetPlain(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): boolean
          public getAndIncrement(arg0: number | java.lang.Integer): number
          public getAndDecrement(arg0: number | java.lang.Integer): number
          public getAndAdd(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
          public incrementAndGet(arg0: number | java.lang.Integer): number
          public decrementAndGet(arg0: number | java.lang.Integer): number
          public addAndGet(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
          public getAndUpdate(arg0: number | java.lang.Integer, arg1: java.util.function$.IntUnaryOperator): number
          public updateAndGet(arg0: number | java.lang.Integer, arg1: java.util.function$.IntUnaryOperator): number
          public getAndAccumulate(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$lambda): number
          public accumulateAndGet(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$lambda): number
          public toString(): java.lang.String
          public getPlain(arg0: number | java.lang.Integer): number
          public setPlain(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
          public getOpaque(arg0: number | java.lang.Integer): number
          public setOpaque(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
          public getAcquire(arg0: number | java.lang.Integer): number
          public setRelease(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
          public compareAndExchange(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
          public compareAndExchangeAcquire(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
          public compareAndExchangeRelease(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
          public weakCompareAndSetVolatile(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): boolean
          public weakCompareAndSetAcquire(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): boolean
          public weakCompareAndSetRelease(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): boolean
        }

      }
    }
  }
}
