declare namespace java {
  namespace lang {
    namespace invoke {
      class StringConcatFactory {
        public static makeConcat(
          arg0: java.lang.invoke.MethodHandles$Lookup,
          arg1: java.lang.String | string,
          arg2: java.lang.invoke.MethodType
        ): java.lang.invoke.CallSite
        public static makeConcatWithConstants(
          arg0: java.lang.invoke.MethodHandles$Lookup,
          arg1: java.lang.String | string,
          arg2: java.lang.invoke.MethodType,
          arg3: java.lang.String | string,
          ...vargs: (java.lang.Object | any)[]
        ): java.lang.invoke.CallSite
        static lookupStatic(
          arg0: java.lang.invoke.MethodHandles$Lookup,
          arg1: java.lang.Class<unknown>,
          arg2: java.lang.String | string,
          arg3: java.lang.Class<unknown>,
          ...vargs: java.lang.Class<unknown>[]
        ): java.lang.invoke.MethodHandle
        static lookupVirtual(
          arg0: java.lang.invoke.MethodHandles$Lookup,
          arg1: java.lang.Class<unknown>,
          arg2: java.lang.String | string,
          arg3: java.lang.Class<unknown>,
          ...vargs: java.lang.Class<unknown>[]
        ): java.lang.invoke.MethodHandle
        static lookupConstructor(
          arg0: java.lang.invoke.MethodHandles$Lookup,
          arg1: java.lang.Class<unknown>,
          arg2: java.lang.Class<unknown>
        ): java.lang.invoke.MethodHandle
        static estimateSize(arg0: java.lang.Class<unknown>): number
        static adaptToStringBuilder(arg0: java.lang.Class<unknown>): java.lang.Class<unknown>
      }
    }
  }
}
