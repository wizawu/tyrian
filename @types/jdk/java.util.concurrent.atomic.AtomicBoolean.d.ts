declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicBoolean implements java.io.Serializable {
          public constructor(arg0: boolean)
          public constructor()
          public get(): boolean
          public compareAndSet(arg0: boolean, arg1: boolean): boolean
          public weakCompareAndSet(arg0: boolean, arg1: boolean): boolean
          public weakCompareAndSetPlain(arg0: boolean, arg1: boolean): boolean
          public set(arg0: boolean): void
          public lazySet(arg0: boolean): void
          public getAndSet(arg0: boolean): boolean
          public toString(): java.lang.String
          public getPlain(): boolean
          public setPlain(arg0: boolean): void
          public getOpaque(): boolean
          public setOpaque(arg0: boolean): void
          public getAcquire(): boolean
          public setRelease(arg0: boolean): void
          public compareAndExchange(arg0: boolean, arg1: boolean): boolean
          public compareAndExchangeAcquire(arg0: boolean, arg1: boolean): boolean
          public compareAndExchangeRelease(arg0: boolean, arg1: boolean): boolean
          public weakCompareAndSetVolatile(arg0: boolean, arg1: boolean): boolean
          public weakCompareAndSetAcquire(arg0: boolean, arg1: boolean): boolean
          public weakCompareAndSetRelease(arg0: boolean, arg1: boolean): boolean
        }

      }
    }
  }
}
