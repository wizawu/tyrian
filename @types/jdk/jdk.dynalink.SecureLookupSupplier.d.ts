declare namespace jdk {
  namespace dynalink {

    class SecureLookupSupplier {

      public static readonly GET_LOOKUP_PERMISSION_NAME: java.lang.String
      public constructor(arg0: java.lang.invoke.MethodHandles$Lookup)
      public readonly getLookup(): java.lang.invoke.MethodHandles$Lookup
      protected readonly getLookupPrivileged(): java.lang.invoke.MethodHandles$Lookup
    }

  }
}
