declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                abstract class ArrayBufferView extends jdk.nashorn.internal.runtime.ScriptObject {
                    protected constructor(arg0: jdk.nashorn.internal.objects.NativeArrayBuffer, arg1: int, arg2: int)
                    public static buffer(arg0: java.lang.Object): java.lang.Object
                    public static byteOffset(arg0: java.lang.Object): int
                    public static byteLength(arg0: java.lang.Object): int
                    public static length(arg0: java.lang.Object): int
                    public getLength(): java.lang.Object
                    protected abstract factory(): jdk.nashorn.internal.objects.ArrayBufferView$Factory
                    protected abstract getPrototype(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.runtime.ScriptObject
                    public getClassName(): string
                    protected isFloatArray(): boolean
                    protected static constructorImpl(arg0: boolean, arg1: java.lang.Object[], arg2: jdk.nashorn.internal.objects.ArrayBufferView$Factory): jdk.nashorn.internal.objects.ArrayBufferView
                    protected static setImpl(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    protected static subarrayImpl(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    protected findGetIndexMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findSetIndexMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}