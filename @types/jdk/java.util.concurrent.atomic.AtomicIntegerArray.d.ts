declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicIntegerArray implements java.io.Serializable {
          public constructor(arg0: int)
          public constructor(arg0: int[])
          public length(): int
          public get(arg0: int): int
          public set(arg0: int, arg1: int): void
          public lazySet(arg0: int, arg1: int): void
          public getAndSet(arg0: int, arg1: int): int
          public compareAndSet(arg0: int, arg1: int, arg2: int): boolean
          public weakCompareAndSet(arg0: int, arg1: int, arg2: int): boolean
          public weakCompareAndSetPlain(arg0: int, arg1: int, arg2: int): boolean
          public getAndIncrement(arg0: int): int
          public getAndDecrement(arg0: int): int
          public getAndAdd(arg0: int, arg1: int): int
          public incrementAndGet(arg0: int): int
          public decrementAndGet(arg0: int): int
          public addAndGet(arg0: int, arg1: int): int
          public getAndUpdate(arg0: int, arg1: java.util.function$.IntUnaryOperator): int
          public updateAndGet(arg0: int, arg1: java.util.function$.IntUnaryOperator): int
          public getAndAccumulate(arg0: int, arg1: int, arg2: java.util.function$.IntBinaryOperator): int
          public accumulateAndGet(arg0: int, arg1: int, arg2: java.util.function$.IntBinaryOperator): int
          public toString(): java.lang.String
          public getPlain(arg0: int): int
          public setPlain(arg0: int, arg1: int): void
          public getOpaque(arg0: int): int
          public setOpaque(arg0: int, arg1: int): void
          public getAcquire(arg0: int): int
          public setRelease(arg0: int, arg1: int): void
          public compareAndExchange(arg0: int, arg1: int, arg2: int): int
          public compareAndExchangeAcquire(arg0: int, arg1: int, arg2: int): int
          public compareAndExchangeRelease(arg0: int, arg1: int, arg2: int): int
          public weakCompareAndSetVolatile(arg0: int, arg1: int, arg2: int): boolean
          public weakCompareAndSetAcquire(arg0: int, arg1: int, arg2: int): boolean
          public weakCompareAndSetRelease(arg0: int, arg1: int, arg2: int): boolean
        }

      }
    }
  }
}
