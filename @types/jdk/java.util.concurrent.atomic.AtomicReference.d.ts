declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicReference<V> implements java.io.Serializable {
          public constructor(arg0: V)
          public constructor()
          public get(): V
          public set(arg0: V): void
          public lazySet(arg0: V): void
          public compareAndSet(arg0: V, arg1: V): boolean
          public weakCompareAndSet(arg0: V, arg1: V): boolean
          public weakCompareAndSetPlain(arg0: V, arg1: V): boolean
          public getAndSet(arg0: V): V
          public getAndUpdate(arg0: java.util.function$.UnaryOperator<V>): V
          public updateAndGet(arg0: java.util.function$.UnaryOperator<V>): V
          public getAndAccumulate(arg0: V, arg1: java.util.function$.BinaryOperator<V>): V
          public accumulateAndGet(arg0: V, arg1: java.util.function$.BinaryOperator<V>): V
          public toString(): java.lang.String
          public getPlain(): V
          public setPlain(arg0: V): void
          public getOpaque(): V
          public setOpaque(arg0: V): void
          public getAcquire(): V
          public setRelease(arg0: V): void
          public compareAndExchange(arg0: V, arg1: V): V
          public compareAndExchangeAcquire(arg0: V, arg1: V): V
          public compareAndExchangeRelease(arg0: V, arg1: V): V
          public weakCompareAndSetVolatile(arg0: V, arg1: V): boolean
          public weakCompareAndSetAcquire(arg0: V, arg1: V): boolean
          public weakCompareAndSetRelease(arg0: V, arg1: V): boolean
        }

      }
    }
  }
}
