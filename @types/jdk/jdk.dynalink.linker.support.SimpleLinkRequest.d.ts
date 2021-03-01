declare namespace jdk {
  namespace dynalink {
    namespace linker {
      namespace support {

        class SimpleLinkRequest implements jdk.dynalink.linker.LinkRequest {

          public constructor(arg0: jdk.dynalink.CallSiteDescriptor, arg1: boolean, ...arg2: java.lang.Object[])
          public getArguments(): java.lang.Object[]
          public getReceiver(): java.lang.Object
          public getCallSiteDescriptor(): jdk.dynalink.CallSiteDescriptor
          public isCallSiteUnstable(): boolean
          public replaceArguments(arg0: jdk.dynalink.CallSiteDescriptor, ...arg1: java.lang.Object[]): jdk.dynalink.linker.LinkRequest
        }

      }
    }
  }
}
