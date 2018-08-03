declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace beans {
                abstract class AbstractJavaLinker implements jdk.internal.dynalink.linker.GuardingDynamicLinker {
                    public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                    protected getGuardedInvocationComponent(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkerServices, arg2: java.util.List<java.lang.String>): jdk.internal.dynalink.beans.GuardedInvocationComponent
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}