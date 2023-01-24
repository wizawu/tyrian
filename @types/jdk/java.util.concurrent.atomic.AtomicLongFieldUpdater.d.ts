declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {
        abstract class AtomicLongFieldUpdater<T> {
          public static newUpdater<U>(
            arg0: java.lang.Class<U>,
            arg1: java.lang.String | string
          ): java.util.concurrent.atomic.AtomicLongFieldUpdater<U>
          protected constructor()
          public abstract compareAndSet(arg0: T, arg1: number | java.lang.Long, arg2: number | java.lang.Long): boolean
          public abstract weakCompareAndSet(
            arg0: T,
            arg1: number | java.lang.Long,
            arg2: number | java.lang.Long
          ): boolean
          public abstract set(arg0: T, arg1: number | java.lang.Long): void
          public abstract lazySet(arg0: T, arg1: number | java.lang.Long): void
          public abstract get(arg0: T): number
          public getAndSet(arg0: T, arg1: number | java.lang.Long): number
          public getAndIncrement(arg0: T): number
          public getAndDecrement(arg0: T): number
          public getAndAdd(arg0: T, arg1: number | java.lang.Long): number
          public incrementAndGet(arg0: T): number
          public decrementAndGet(arg0: T): number
          public addAndGet(arg0: T, arg1: number | java.lang.Long): number
          public getAndUpdate(arg0: T, arg1: java.util.function$.LongUnaryOperator): number
          public updateAndGet(arg0: T, arg1: java.util.function$.LongUnaryOperator): number
          public getAndAccumulate(
            arg0: T,
            arg1: number | java.lang.Long,
            arg2: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$lambda
          ): number
          public accumulateAndGet(
            arg0: T,
            arg1: number | java.lang.Long,
            arg2: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$lambda
          ): number
          static isAncestor(arg0: java.lang.ClassLoader, arg1: java.lang.ClassLoader): boolean
          static isSamePackage(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>): boolean
        }
      }
    }
  }
}
