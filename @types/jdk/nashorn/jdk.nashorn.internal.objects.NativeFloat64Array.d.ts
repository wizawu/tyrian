declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                class NativeFloat64Array extends jdk.nashorn.internal.objects.ArrayBufferView {
                    public static BYTES_PER_ELEMENT: int
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeFloat64Array
                    protected factory(): jdk.nashorn.internal.objects.ArrayBufferView$Factory
                    protected isFloatArray(): boolean
                    protected static set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    protected static subarray(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeFloat64Array
                    protected getPrototype(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.runtime.ScriptObject
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}