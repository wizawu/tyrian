declare namespace jdk {
  namespace dynalink {

    class CallSiteDescriptor extends jdk.dynalink.SecureLookupSupplier {

      public constructor(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: jdk.dynalink.Operation, arg2: java.lang.invoke.MethodType)
      public readonly getOperation(): jdk.dynalink.Operation
      public readonly getMethodType(): java.lang.invoke.MethodType
      public readonly changeMethodType(arg0: java.lang.invoke.MethodType): jdk.dynalink.CallSiteDescriptor
      protected changeMethodTypeInternal(arg0: java.lang.invoke.MethodType): jdk.dynalink.CallSiteDescriptor
      public readonly changeOperation(arg0: jdk.dynalink.Operation): jdk.dynalink.CallSiteDescriptor
      protected changeOperationInternal(arg0: jdk.dynalink.Operation): jdk.dynalink.CallSiteDescriptor
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
    }

  }
}
