declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicMarkableReference<V> {
          public constructor(arg0: V, arg1: boolean | java.lang.Boolean)
          public getReference(): V
          public isMarked(): boolean
          public get(arg0: boolean[]): V
          public weakCompareAndSet(arg0: V, arg1: V, arg2: boolean | java.lang.Boolean, arg3: boolean | java.lang.Boolean): boolean
          public compareAndSet(arg0: V, arg1: V, arg2: boolean | java.lang.Boolean, arg3: boolean | java.lang.Boolean): boolean
          public set(arg0: V, arg1: boolean | java.lang.Boolean): void
          public attemptMark(arg0: V, arg1: boolean | java.lang.Boolean): boolean
        }

      }
    }
  }
}
