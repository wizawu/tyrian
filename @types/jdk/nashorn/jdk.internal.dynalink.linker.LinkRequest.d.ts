declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace linker {
                interface LinkRequest {
                    getCallSiteDescriptor(): jdk.internal.dynalink.CallSiteDescriptor
                    getCallSiteToken(): java.lang.Object
                    getArguments(): java.lang.Object[]
                    getReceiver(): java.lang.Object
                    getLinkCount(): int
                    isCallSiteUnstable(): boolean
                    withoutRuntimeContext(): jdk.internal.dynalink.linker.LinkRequest
                    replaceArguments(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: java.lang.Object[]): jdk.internal.dynalink.linker.LinkRequest
                }
            }
        }
    }
}