declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        abstract class AtomicReferenceFieldUpdater<T,V> {

          public static newUpdater<U,W>(arg0: java.lang.Class<U>, arg1: java.lang.Class<W>, arg2: java.lang.String): java.util.concurrent.atomic.AtomicReferenceFieldUpdater<U,W>
          protected constructor()
          public abstract compareAndSet(arg0: T, arg1: V, arg2: V): boolean
          public abstract weakCompareAndSet(arg0: T, arg1: V, arg2: V): boolean
          public abstract set(arg0: T, arg1: V): void
          public abstract lazySet(arg0: T, arg1: V): void
          public abstract get(arg0: T): V
          public getAndSet(arg0: T, arg1: V): V
          public readonly getAndUpdate(arg0: T, arg1: java.util.function$.UnaryOperator<V>): V
          public readonly updateAndGet(arg0: T, arg1: java.util.function$.UnaryOperator<V>): V
          public readonly getAndAccumulate(arg0: T, arg1: V, arg2: java.util.function$.BinaryOperator<V>): V
          public readonly accumulateAndGet(arg0: T, arg1: V, arg2: java.util.function$.BinaryOperator<V>): V
        }

      }
    }
  }
}
