declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
class NativeJavaPackage extends jdk.nashorn.internal.runtime.ScriptObject {
    public constructor(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.runtime.ScriptObject)
    public getClassName(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public getName(): string
    public safeToString(): string
    public toString(): string
    public getDefaultValue(arg0: java.lang.Class<any>): java.lang.Object
    protected findNewMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
    protected findCallMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
    public static __noSuchProperty__(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public static __noSuchMethod__(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
    public noSuchProperty(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
    protected invokeNoSuchProperty(arg0: java.lang.String | string, arg1: boolean, arg2: int): java.lang.Object
    public noSuchMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
    public static class: java.lang.Class<any>
}

            }
        }
    }
}