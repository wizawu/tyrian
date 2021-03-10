declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicStampedReference<V> {
          public constructor(arg0: V, arg1: number | java.lang.Integer)
          public getReference(): V
          public getStamp(): number
          public get(arg0: number[] | java.lang.Integer[]): V
          public weakCompareAndSet(arg0: V, arg1: V, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): boolean
          public compareAndSet(arg0: V, arg1: V, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): boolean
          public set(arg0: V, arg1: number | java.lang.Integer): void
          public attemptStamp(arg0: V, arg1: number | java.lang.Integer): boolean
        }

      }
    }
  }
}
