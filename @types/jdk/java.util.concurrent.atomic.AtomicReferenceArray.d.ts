declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicReferenceArray<E> implements java.io.Serializable {
          public constructor(arg0: int)
          public constructor(arg0: E[])
          public length(): int
          public get(arg0: int): E
          public set(arg0: int, arg1: E): void
          public lazySet(arg0: int, arg1: E): void
          public getAndSet(arg0: int, arg1: E): E
          public compareAndSet(arg0: int, arg1: E, arg2: E): boolean
          public weakCompareAndSet(arg0: int, arg1: E, arg2: E): boolean
          public weakCompareAndSetPlain(arg0: int, arg1: E, arg2: E): boolean
          public getAndUpdate(arg0: int, arg1: java.util.function$.UnaryOperator<E>): E
          public updateAndGet(arg0: int, arg1: java.util.function$.UnaryOperator<E>): E
          public getAndAccumulate(arg0: int, arg1: E, arg2: java.util.function$.BinaryOperator<E>): E
          public accumulateAndGet(arg0: int, arg1: E, arg2: java.util.function$.BinaryOperator<E>): E
          public toString(): java.lang.String
          public getPlain(arg0: int): E
          public setPlain(arg0: int, arg1: E): void
          public getOpaque(arg0: int): E
          public setOpaque(arg0: int, arg1: E): void
          public getAcquire(arg0: int): E
          public setRelease(arg0: int, arg1: E): void
          public compareAndExchange(arg0: int, arg1: E, arg2: E): E
          public compareAndExchangeAcquire(arg0: int, arg1: E, arg2: E): E
          public compareAndExchangeRelease(arg0: int, arg1: E, arg2: E): E
          public weakCompareAndSetVolatile(arg0: int, arg1: E, arg2: E): boolean
          public weakCompareAndSetAcquire(arg0: int, arg1: E, arg2: E): boolean
          public weakCompareAndSetRelease(arg0: int, arg1: E, arg2: E): boolean
        }

      }
    }
  }
}
