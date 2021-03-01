declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicReferenceArray<E> implements java.io.Serializable {

          public constructor(arg0: int)
          public constructor(arg0: E[])
          public readonly length(): int
          public readonly get(arg0: int): E
          public readonly set(arg0: int, arg1: E): void
          public readonly lazySet(arg0: int, arg1: E): void
          public readonly getAndSet(arg0: int, arg1: E): E
          public readonly compareAndSet(arg0: int, arg1: E, arg2: E): boolean
          public readonly weakCompareAndSet(arg0: int, arg1: E, arg2: E): boolean
          public readonly weakCompareAndSetPlain(arg0: int, arg1: E, arg2: E): boolean
          public readonly getAndUpdate(arg0: int, arg1: java.util.function$.UnaryOperator<E>): E
          public readonly updateAndGet(arg0: int, arg1: java.util.function$.UnaryOperator<E>): E
          public readonly getAndAccumulate(arg0: int, arg1: E, arg2: java.util.function$.BinaryOperator<E>): E
          public readonly accumulateAndGet(arg0: int, arg1: E, arg2: java.util.function$.BinaryOperator<E>): E
          public toString(): java.lang.String
          public readonly getPlain(arg0: int): E
          public readonly setPlain(arg0: int, arg1: E): void
          public readonly getOpaque(arg0: int): E
          public readonly setOpaque(arg0: int, arg1: E): void
          public readonly getAcquire(arg0: int): E
          public readonly setRelease(arg0: int, arg1: E): void
          public readonly compareAndExchange(arg0: int, arg1: E, arg2: E): E
          public readonly compareAndExchangeAcquire(arg0: int, arg1: E, arg2: E): E
          public readonly compareAndExchangeRelease(arg0: int, arg1: E, arg2: E): E
          public readonly weakCompareAndSetVolatile(arg0: int, arg1: E, arg2: E): boolean
          public readonly weakCompareAndSetAcquire(arg0: int, arg1: E, arg2: E): boolean
          public readonly weakCompareAndSetRelease(arg0: int, arg1: E, arg2: E): boolean
        }

      }
    }
  }
}
