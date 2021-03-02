declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        abstract class AtomicIntegerFieldUpdater<T> {
          public static newUpdater<U>(arg0: java.lang.Class<U>, arg1: java.lang.String | string): java.util.concurrent.atomic.AtomicIntegerFieldUpdater<U>
          protected constructor()
          public abstract compareAndSet(arg0: T, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): boolean
          public abstract weakCompareAndSet(arg0: T, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): boolean
          public abstract set(arg0: T, arg1: number | java.lang.Integer): void
          public abstract lazySet(arg0: T, arg1: number | java.lang.Integer): void
          public abstract get(arg0: T): number
          public getAndSet(arg0: T, arg1: number | java.lang.Integer): number
          public getAndIncrement(arg0: T): number
          public getAndDecrement(arg0: T): number
          public getAndAdd(arg0: T, arg1: number | java.lang.Integer): number
          public incrementAndGet(arg0: T): number
          public decrementAndGet(arg0: T): number
          public addAndGet(arg0: T, arg1: number | java.lang.Integer): number
          public getAndUpdate(arg0: T, arg1: java.util.function$.IntUnaryOperator): number
          public updateAndGet(arg0: T, arg1: java.util.function$.IntUnaryOperator): number
          public getAndAccumulate(arg0: T, arg1: number | java.lang.Integer, arg2: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$lambda): number
          public accumulateAndGet(arg0: T, arg1: number | java.lang.Integer, arg2: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$lambda): number
        }

      }
    }
  }
}
