declare namespace jdk {
  namespace dynalink {
    namespace linker {
      namespace support {

        class SimpleLinkRequest implements jdk.dynalink.linker.LinkRequest {
          public constructor(arg0: jdk.dynalink.CallSiteDescriptor, arg1: boolean | java.lang.Boolean, ...vargs: (java.lang.Object | any)[])
          public getArguments(): java.lang.Object[]
          public getReceiver(): java.lang.Object
          public getCallSiteDescriptor(): jdk.dynalink.CallSiteDescriptor
          public isCallSiteUnstable(): boolean
          public replaceArguments(arg0: jdk.dynalink.CallSiteDescriptor, ...vargs: (java.lang.Object | any)[]): jdk.dynalink.linker.LinkRequest
        }

      }
    }
  }
}
