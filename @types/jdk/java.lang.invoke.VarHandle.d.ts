declare namespace java {
  namespace lang {
    namespace invoke {

      abstract class VarHandle {
        readonly vform: java.lang.invoke.VarForm
        typesAndInvokers: java.lang.invoke.VarHandle$TypesAndInvokers
        static readonly AIOOBE_SUPPLIER: java.util.function$.BiFunction<java.lang.String,java.util.List<java.lang.Integer>,java.lang.ArrayIndexOutOfBoundsException>
        static readonly $assertionsDisabled: boolean
        constructor(arg0: java.lang.invoke.VarForm)
        unsupported(): java.lang.RuntimeException
        public get(...arg0: java.lang.Object[]): java.lang.Object
        public set(...arg0: java.lang.Object[]): void
        public getVolatile(...arg0: java.lang.Object[]): java.lang.Object
        public setVolatile(...arg0: java.lang.Object[]): void
        public getOpaque(...arg0: java.lang.Object[]): java.lang.Object
        public setOpaque(...arg0: java.lang.Object[]): void
        public getAcquire(...arg0: java.lang.Object[]): java.lang.Object
        public setRelease(...arg0: java.lang.Object[]): void
        public compareAndSet(...arg0: java.lang.Object[]): boolean
        public compareAndExchange(...arg0: java.lang.Object[]): java.lang.Object
        public compareAndExchangeAcquire(...arg0: java.lang.Object[]): java.lang.Object
        public compareAndExchangeRelease(...arg0: java.lang.Object[]): java.lang.Object
        public weakCompareAndSetPlain(...arg0: java.lang.Object[]): boolean
        public weakCompareAndSet(...arg0: java.lang.Object[]): boolean
        public weakCompareAndSetAcquire(...arg0: java.lang.Object[]): boolean
        public weakCompareAndSetRelease(...arg0: java.lang.Object[]): boolean
        public getAndSet(...arg0: java.lang.Object[]): java.lang.Object
        public getAndSetAcquire(...arg0: java.lang.Object[]): java.lang.Object
        public getAndSetRelease(...arg0: java.lang.Object[]): java.lang.Object
        public getAndAdd(...arg0: java.lang.Object[]): java.lang.Object
        public getAndAddAcquire(...arg0: java.lang.Object[]): java.lang.Object
        public getAndAddRelease(...arg0: java.lang.Object[]): java.lang.Object
        public getAndBitwiseOr(...arg0: java.lang.Object[]): java.lang.Object
        public getAndBitwiseOrAcquire(...arg0: java.lang.Object[]): java.lang.Object
        public getAndBitwiseOrRelease(...arg0: java.lang.Object[]): java.lang.Object
        public getAndBitwiseAnd(...arg0: java.lang.Object[]): java.lang.Object
        public getAndBitwiseAndAcquire(...arg0: java.lang.Object[]): java.lang.Object
        public getAndBitwiseAndRelease(...arg0: java.lang.Object[]): java.lang.Object
        public getAndBitwiseXor(...arg0: java.lang.Object[]): java.lang.Object
        public getAndBitwiseXorAcquire(...arg0: java.lang.Object[]): java.lang.Object
        public getAndBitwiseXorRelease(...arg0: java.lang.Object[]): java.lang.Object
        public varType(): java.lang.Class<unknown>
        public coordinateTypes(): java.util.List<java.lang.Class<unknown>>
        public accessModeType(arg0: java.lang.invoke.VarHandle$AccessMode): java.lang.invoke.MethodType
        abstract accessModeTypeUncached(arg0: java.lang.invoke.VarHandle$AccessMode): java.lang.invoke.MethodType
        public isAccessModeSupported(arg0: java.lang.invoke.VarHandle$AccessMode): boolean
        public toMethodHandle(arg0: java.lang.invoke.VarHandle$AccessMode): java.lang.invoke.MethodHandle
        getMethodHandle(arg0: int): java.lang.invoke.MethodHandle
        updateVarForm(arg0: java.lang.invoke.VarForm): void
        public static fullFence(): void
        public static acquireFence(): void
        public static releaseFence(): void
        public static loadLoadFence(): void
        public static storeStoreFence(): void
      }

    }
  }
}
