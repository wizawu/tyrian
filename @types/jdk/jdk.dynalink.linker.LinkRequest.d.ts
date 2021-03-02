declare namespace jdk {
  namespace dynalink {
    namespace linker {

      interface LinkRequest {
        getCallSiteDescriptor(): jdk.dynalink.CallSiteDescriptor
        getArguments(): java.lang.Object[]
        getReceiver(): java.lang.Object
        isCallSiteUnstable(): boolean
        replaceArguments(arg0: jdk.dynalink.CallSiteDescriptor, ...vargs: (java.lang.Object | any)[]): jdk.dynalink.linker.LinkRequest
      }

    }
  }
}
