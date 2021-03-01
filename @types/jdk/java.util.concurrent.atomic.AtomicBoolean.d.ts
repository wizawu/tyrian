declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class AtomicBoolean implements java.io.Serializable {

          public constructor(arg0: boolean)
          public constructor()
          public readonly get(): boolean
          public readonly compareAndSet(arg0: boolean, arg1: boolean): boolean
          public weakCompareAndSet(arg0: boolean, arg1: boolean): boolean
          public weakCompareAndSetPlain(arg0: boolean, arg1: boolean): boolean
          public readonly set(arg0: boolean): void
          public readonly lazySet(arg0: boolean): void
          public readonly getAndSet(arg0: boolean): boolean
          public toString(): java.lang.String
          public readonly getPlain(): boolean
          public readonly setPlain(arg0: boolean): void
          public readonly getOpaque(): boolean
          public readonly setOpaque(arg0: boolean): void
          public readonly getAcquire(): boolean
          public readonly setRelease(arg0: boolean): void
          public readonly compareAndExchange(arg0: boolean, arg1: boolean): boolean
          public readonly compareAndExchangeAcquire(arg0: boolean, arg1: boolean): boolean
          public readonly compareAndExchangeRelease(arg0: boolean, arg1: boolean): boolean
          public readonly weakCompareAndSetVolatile(arg0: boolean, arg1: boolean): boolean
          public readonly weakCompareAndSetAcquire(arg0: boolean, arg1: boolean): boolean
          public readonly weakCompareAndSetRelease(arg0: boolean, arg1: boolean): boolean
        }

      }
    }
  }
}
