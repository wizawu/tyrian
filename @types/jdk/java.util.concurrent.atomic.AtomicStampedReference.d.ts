declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicStampedReference<V> {
          public constructor(arg0: V, arg1: int)
          public getReference(): V
          public getStamp(): int
          public get(arg0: int[]): V
          public weakCompareAndSet(arg0: V, arg1: V, arg2: int, arg3: int): boolean
          public compareAndSet(arg0: V, arg1: V, arg2: int, arg3: int): boolean
          public set(arg0: V, arg1: int): void
          public attemptStamp(arg0: V, arg1: int): boolean
        }

      }
    }
  }
}
