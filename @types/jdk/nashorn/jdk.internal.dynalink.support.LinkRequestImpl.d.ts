declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace support {
class LinkRequestImpl implements jdk.internal.dynalink.linker.LinkRequest {
    public constructor(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: java.lang.Object, arg2: int, arg3: boolean, ...arg4: java.lang.Object[])
    public getArguments(): java.lang.Object[]
    public getReceiver(): java.lang.Object
    public getCallSiteDescriptor(): jdk.internal.dynalink.CallSiteDescriptor
    public getCallSiteToken(): java.lang.Object
    public isCallSiteUnstable(): boolean
    public getLinkCount(): int
    public withoutRuntimeContext(): jdk.internal.dynalink.linker.LinkRequest
    public replaceArguments(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: java.lang.Object[]): jdk.internal.dynalink.linker.LinkRequest
    public static class: java.lang.Class<any>
}

            }
        }
    }
}