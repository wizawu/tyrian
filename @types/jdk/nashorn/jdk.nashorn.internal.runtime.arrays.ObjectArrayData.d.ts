declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
class ObjectArrayData extends jdk.nashorn.internal.runtime.arrays.ContinuousArrayData implements jdk.nashorn.internal.runtime.arrays.AnyElements {
    public getElementType(): java.lang.Class<any>
    public getBoxedElementType(): java.lang.Class<any>
    public getElementWeight(): int
    public widest(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
    public copy(): jdk.nashorn.internal.runtime.arrays.ObjectArrayData
    public asObjectArray(): java.lang.Object[]
    public convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ObjectArrayData
    public shiftLeft(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
    public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
    public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
    public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
    public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
    public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
    public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
    public setEmpty(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
    public setEmpty(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
    public getElementGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
    public getElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public getInt(arg0: int): int
    public getDouble(arg0: int): double
    public getObject(arg0: int): java.lang.Object
    public has(arg0: int): boolean
    public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
    public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
    public fastPush(arg0: int): double
    public fastPush(arg0: long): double
    public fastPush(arg0: double): double
    public fastPush(arg0: java.lang.Object): double
    public fastPopObject(): java.lang.Object
    public pop(): java.lang.Object
    public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
    public push(arg0: boolean, arg1: java.lang.Object): jdk.nashorn.internal.runtime.arrays.ArrayData
    public fastSplice(arg0: int, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.ArrayData
    public fastConcat(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
    public toString(): string
    public copy(): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
    public convert(arg0: java.lang.Class): jdk.nashorn.internal.runtime.arrays.ArrayData
    public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
    public static class: java.lang.Class<any>
}

class ObjectArrayData$$Lambda extends jdk.nashorn.internal.runtime.arrays.ContinuousArrayData implements jdk.nashorn.internal.runtime.arrays.AnyElements {
    public (): java.lang.Class<any>
}

                }
            }
        }
    }
}