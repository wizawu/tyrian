declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                class NativeInt8Array$Int8ArrayData extends jdk.nashorn.internal.runtime.arrays.TypedArrayData<java.nio.ByteBuffer> {
                    protected getGetElem(): java.lang.invoke.MethodHandle
                    protected getSetElem(): java.lang.invoke.MethodHandle
                    public getElementType(): java.lang.Class<any>
                    public getBoxedElementType(): java.lang.Class<any>
                    public getInt(arg0: int): int
                    public getIntOptimistic(arg0: int, arg1: int): int
                    public getDouble(arg0: int): double
                    public getDoubleOptimistic(arg0: int, arg1: int): double
                    public getObject(arg0: int): java.lang.Object
                    public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}