declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace beans {
                class OverloadedDynamicMethod extends jdk.internal.dynalink.beans.DynamicMethod {
                    public getInvocation(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkerServices): java.lang.invoke.MethodHandle
                    public contains(arg0: jdk.internal.dynalink.beans.SingleDynamicMethod): boolean
                    public isConstructor(): boolean
                    public toString(): string
                    public addMethod(arg0: jdk.internal.dynalink.beans.SingleDynamicMethod): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}