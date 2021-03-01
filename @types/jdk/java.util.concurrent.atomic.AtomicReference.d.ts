declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicReference<V> implements java.io.Serializable {

          public constructor(arg0: V)
          public constructor()
          public readonly get(): V
          public readonly set(arg0: V): void
          public readonly lazySet(arg0: V): void
          public readonly compareAndSet(arg0: V, arg1: V): boolean
          public readonly weakCompareAndSet(arg0: V, arg1: V): boolean
          public readonly weakCompareAndSetPlain(arg0: V, arg1: V): boolean
          public readonly getAndSet(arg0: V): V
          public readonly getAndUpdate(arg0: java.util.function$.UnaryOperator<V>): V
          public readonly updateAndGet(arg0: java.util.function$.UnaryOperator<V>): V
          public readonly getAndAccumulate(arg0: V, arg1: java.util.function$.BinaryOperator<V>): V
          public readonly accumulateAndGet(arg0: V, arg1: java.util.function$.BinaryOperator<V>): V
          public toString(): java.lang.String
          public readonly getPlain(): V
          public readonly setPlain(arg0: V): void
          public readonly getOpaque(): V
          public readonly setOpaque(arg0: V): void
          public readonly getAcquire(): V
          public readonly setRelease(arg0: V): void
          public readonly compareAndExchange(arg0: V, arg1: V): V
          public readonly compareAndExchangeAcquire(arg0: V, arg1: V): V
          public readonly compareAndExchangeRelease(arg0: V, arg1: V): V
          public readonly weakCompareAndSetVolatile(arg0: V, arg1: V): boolean
          public readonly weakCompareAndSetAcquire(arg0: V, arg1: V): boolean
          public readonly weakCompareAndSetRelease(arg0: V, arg1: V): boolean
        }

      }
    }
  }
}
