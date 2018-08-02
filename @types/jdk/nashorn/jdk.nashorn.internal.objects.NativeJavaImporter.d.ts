declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
class NativeJavaImporter extends jdk.nashorn.internal.runtime.ScriptObject {
    public getClassName(): string
    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeJavaImporter
    public static __noSuchProperty__(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public static __noSuchMethod__(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
    public noSuchProperty(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
    public noSuchMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
    public protected invokeNoSuchProperty(arg0: java.lang.String | string, arg1: boolean, arg2: int): java.lang.Object
    public static $clinit$(): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}