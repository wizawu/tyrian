declare namespace jdk {
  namespace dynalink {
    class CallSiteDescriptor extends jdk.dynalink.SecureLookupSupplier {
      public constructor(
        arg0: java.lang.invoke.MethodHandles$Lookup,
        arg1: jdk.dynalink.Operation,
        arg2: java.lang.invoke.MethodType
      )
      public getOperation(): jdk.dynalink.Operation
      public getMethodType(): java.lang.invoke.MethodType
      public changeMethodType(arg0: java.lang.invoke.MethodType): jdk.dynalink.CallSiteDescriptor
      protected changeMethodTypeInternal(arg0: java.lang.invoke.MethodType): jdk.dynalink.CallSiteDescriptor
      public changeOperation(arg0: jdk.dynalink.Operation): jdk.dynalink.CallSiteDescriptor
      protected changeOperationInternal(arg0: jdk.dynalink.Operation): jdk.dynalink.CallSiteDescriptor
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
    }
  }
}
