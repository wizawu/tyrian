declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                abstract class ArrayBufferView$Factory {
                    public constructor(arg0: int)
                    public construct(arg0: int): jdk.nashorn.internal.objects.ArrayBufferView
                    public construct(arg0: jdk.nashorn.internal.objects.NativeArrayBuffer, arg1: int, arg2: int): jdk.nashorn.internal.objects.ArrayBufferView
                    public createArrayData(arg0: java.nio.ByteBuffer, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.TypedArrayData<any>
                    public getClassName(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}