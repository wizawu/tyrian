declare namespace jdk {
  namespace dynalink {
    namespace linker {
      interface GuardingTypeConverterFactory$$lambda {
        (
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.Class<unknown>,
          arg2:
            | java.util.function$.Supplier<java.lang.invoke.MethodHandles$Lookup>
            | java.util.function$.Supplier$$lambda<java.lang.invoke.MethodHandles$Lookup>
        ): jdk.dynalink.linker.GuardedInvocation
      }

      interface GuardingTypeConverterFactory {
        convertToType(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.Class<unknown>,
          arg2:
            | java.util.function$.Supplier<java.lang.invoke.MethodHandles$Lookup>
            | java.util.function$.Supplier$$lambda<java.lang.invoke.MethodHandles$Lookup>
        ): jdk.dynalink.linker.GuardedInvocation
      }
    }
  }
}
