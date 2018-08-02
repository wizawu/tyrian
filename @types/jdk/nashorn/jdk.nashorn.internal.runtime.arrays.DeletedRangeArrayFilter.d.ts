declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
class DeletedRangeArrayFilter extends jdk.nashorn.internal.runtime.arrays.ArrayFilter {
    public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
    public asObjectArray(): java.lang.Object[]
    public asArrayOfType(arg0: java.lang.Class<any>): java.lang.Object
    public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
    public shiftLeft(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
    public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
    public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
    public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
    public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
    public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
    public has(arg0: int): boolean
    public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
    public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
    public pop(): java.lang.Object
    public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}