declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        abstract class AtomicIntegerFieldUpdater<T> {

          public static newUpdater<U>(arg0: java.lang.Class<U>, arg1: java.lang.String): java.util.concurrent.atomic.AtomicIntegerFieldUpdater<U>
          protected constructor()
          public abstract compareAndSet(arg0: T, arg1: int, arg2: int): boolean
          public abstract weakCompareAndSet(arg0: T, arg1: int, arg2: int): boolean
          public abstract set(arg0: T, arg1: int): void
          public abstract lazySet(arg0: T, arg1: int): void
          public abstract get(arg0: T): int
          public getAndSet(arg0: T, arg1: int): int
          public getAndIncrement(arg0: T): int
          public getAndDecrement(arg0: T): int
          public getAndAdd(arg0: T, arg1: int): int
          public incrementAndGet(arg0: T): int
          public decrementAndGet(arg0: T): int
          public addAndGet(arg0: T, arg1: int): int
          public readonly getAndUpdate(arg0: T, arg1: java.util.function$.IntUnaryOperator): int
          public readonly updateAndGet(arg0: T, arg1: java.util.function$.IntUnaryOperator): int
          public readonly getAndAccumulate(arg0: T, arg1: int, arg2: java.util.function$.IntBinaryOperator): int
          public readonly accumulateAndGet(arg0: T, arg1: int, arg2: java.util.function$.IntBinaryOperator): int
        }

      }
    }
  }
}
