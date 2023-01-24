declare namespace jdk {
  namespace dynalink {
    namespace linker {
      interface LinkerServices {
        asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
        asTypeLosslessReturn(
          arg0: java.lang.invoke.MethodHandle,
          arg1: java.lang.invoke.MethodType
        ): java.lang.invoke.MethodHandle
        getTypeConverter(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>): java.lang.invoke.MethodHandle
        canConvert(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>): boolean
        getGuardedInvocation(arg0: jdk.dynalink.linker.LinkRequest): jdk.dynalink.linker.GuardedInvocation
        compareConversion(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.Class<unknown>,
          arg2: java.lang.Class<unknown>
        ): jdk.dynalink.linker.ConversionComparator$Comparison
        filterInternalObjects(arg0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
        getWithLookup<T>(
          arg0: java.util.function$.Supplier<T> | java.util.function$.Supplier$$lambda<T>,
          arg1: jdk.dynalink.SecureLookupSupplier
        ): T
      }
    }
  }
}
