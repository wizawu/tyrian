declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace support {
                class UnnamedDynCallSiteDescriptor extends jdk.internal.dynalink.support.AbstractCallSiteDescriptor {
                    public getNameTokenCount(): int
                    public getNameToken(arg0: int): string
                    public getMethodType(): java.lang.invoke.MethodType
                    public changeMethodType(arg0: java.lang.invoke.MethodType): jdk.internal.dynalink.CallSiteDescriptor
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}