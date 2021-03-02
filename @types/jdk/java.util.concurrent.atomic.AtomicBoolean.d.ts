declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicBoolean implements java.io.Serializable {
          public constructor(arg0: boolean | java.lang.Boolean)
          public constructor()
          public get(): boolean
          public compareAndSet(arg0: boolean | java.lang.Boolean, arg1: boolean | java.lang.Boolean): boolean
          public weakCompareAndSet(arg0: boolean | java.lang.Boolean, arg1: boolean | java.lang.Boolean): boolean
          public weakCompareAndSetPlain(arg0: boolean | java.lang.Boolean, arg1: boolean | java.lang.Boolean): boolean
          public set(arg0: boolean | java.lang.Boolean): void
          public lazySet(arg0: boolean | java.lang.Boolean): void
          public getAndSet(arg0: boolean | java.lang.Boolean): boolean
          public toString(): java.lang.String
          public getPlain(): boolean
          public setPlain(arg0: boolean | java.lang.Boolean): void
          public getOpaque(): boolean
          public setOpaque(arg0: boolean | java.lang.Boolean): void
          public getAcquire(): boolean
          public setRelease(arg0: boolean | java.lang.Boolean): void
          public compareAndExchange(arg0: boolean | java.lang.Boolean, arg1: boolean | java.lang.Boolean): boolean
          public compareAndExchangeAcquire(arg0: boolean | java.lang.Boolean, arg1: boolean | java.lang.Boolean): boolean
          public compareAndExchangeRelease(arg0: boolean | java.lang.Boolean, arg1: boolean | java.lang.Boolean): boolean
          public weakCompareAndSetVolatile(arg0: boolean | java.lang.Boolean, arg1: boolean | java.lang.Boolean): boolean
          public weakCompareAndSetAcquire(arg0: boolean | java.lang.Boolean, arg1: boolean | java.lang.Boolean): boolean
          public weakCompareAndSetRelease(arg0: boolean | java.lang.Boolean, arg1: boolean | java.lang.Boolean): boolean
        }

      }
    }
  }
}
