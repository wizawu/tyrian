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
        public get(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public set(...vargs: (java.lang.Object | any)[]): void
        public getVolatile(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public setVolatile(...vargs: (java.lang.Object | any)[]): void
        public getOpaque(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public setOpaque(...vargs: (java.lang.Object | any)[]): void
        public getAcquire(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public setRelease(...vargs: (java.lang.Object | any)[]): void
        public compareAndSet(...vargs: (java.lang.Object | any)[]): boolean
        public compareAndExchange(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public compareAndExchangeAcquire(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public compareAndExchangeRelease(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public weakCompareAndSetPlain(...vargs: (java.lang.Object | any)[]): boolean
        public weakCompareAndSet(...vargs: (java.lang.Object | any)[]): boolean
        public weakCompareAndSetAcquire(...vargs: (java.lang.Object | any)[]): boolean
        public weakCompareAndSetRelease(...vargs: (java.lang.Object | any)[]): boolean
        public getAndSet(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public getAndSetAcquire(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public getAndSetRelease(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public getAndAdd(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public getAndAddAcquire(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public getAndAddRelease(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public getAndBitwiseOr(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public getAndBitwiseOrAcquire(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public getAndBitwiseOrRelease(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public getAndBitwiseAnd(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public getAndBitwiseAndAcquire(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public getAndBitwiseAndRelease(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public getAndBitwiseXor(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public getAndBitwiseXorAcquire(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public getAndBitwiseXorRelease(...vargs: (java.lang.Object | any)[]): java.lang.Object
        public varType(): java.lang.Class<unknown>
        public coordinateTypes(): java.util.List<java.lang.Class<unknown>>
        public accessModeType(arg0: java.lang.invoke.VarHandle$AccessMode): java.lang.invoke.MethodType
        abstract accessModeTypeUncached(arg0: java.lang.invoke.VarHandle$AccessMode): java.lang.invoke.MethodType
        public isAccessModeSupported(arg0: java.lang.invoke.VarHandle$AccessMode): boolean
        public toMethodHandle(arg0: java.lang.invoke.VarHandle$AccessMode): java.lang.invoke.MethodHandle
        getMethodHandle(arg0: number | java.lang.Integer): java.lang.invoke.MethodHandle
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
