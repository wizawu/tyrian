declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
class NativeArrayBuffer extends jdk.nashorn.internal.runtime.ScriptObject {
    protected constructor(arg0: java.nio.ByteBuffer, arg1: jdk.nashorn.internal.objects.Global)
    protected constructor(arg0: java.nio.ByteBuffer)
    protected constructor(arg0: int)
    protected constructor(arg0: jdk.nashorn.internal.objects.NativeArrayBuffer, arg1: int, arg2: int)
    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeArrayBuffer
    public getClassName(): string
    public static byteLength(arg0: java.lang.Object): int
    public static isView(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    public static slice(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeArrayBuffer
    public static slice(arg0: java.lang.Object, arg1: int, arg2: int): java.lang.Object
    public public static slice(arg0: java.lang.Object, arg1: int): java.lang.Object
    public static $clinit$(): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}