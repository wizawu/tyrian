declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
abstract class ArrayData {
    protected static CHUNK_SIZE: int
    public static EMPTY_ARRAY: jdk.nashorn.internal.runtime.arrays.ArrayData
    protected static THROW_UNWARRANTED: jdk.nashorn.internal.codegen.CompilerConstants$Call
    protected constructor(arg0: long)
    public static initialArray(): jdk.nashorn.internal.runtime.arrays.ArrayData
    protected static throwUnwarranted(arg0: jdk.nashorn.internal.runtime.arrays.ArrayData, arg1: int, arg2: int): void
    protected static alignUp(arg0: int): int
    public static allocate(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
    public static allocate(arg0: java.lang.Object): jdk.nashorn.internal.runtime.arrays.ArrayData
    public static allocate(arg0: int[]): jdk.nashorn.internal.runtime.arrays.ArrayData
    public static allocate(arg0: double[]): jdk.nashorn.internal.runtime.arrays.ArrayData
    public static allocate(arg0: java.lang.Object[]): jdk.nashorn.internal.runtime.arrays.ArrayData
    public static allocate(arg0: java.nio.ByteBuffer): jdk.nashorn.internal.runtime.arrays.ArrayData
    public static freeze(arg0: jdk.nashorn.internal.runtime.arrays.ArrayData): jdk.nashorn.internal.runtime.arrays.ArrayData
    public static seal(arg0: jdk.nashorn.internal.runtime.arrays.ArrayData): jdk.nashorn.internal.runtime.arrays.ArrayData
    public static preventExtension(arg0: jdk.nashorn.internal.runtime.arrays.ArrayData): jdk.nashorn.internal.runtime.arrays.ArrayData
    public static setIsLengthNotWritable(arg0: jdk.nashorn.internal.runtime.arrays.ArrayData): jdk.nashorn.internal.runtime.arrays.ArrayData
    public length(): long
    public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
    public asObjectArray(): java.lang.Object[]
    public asArrayOfType(arg0: java.lang.Class<any>): java.lang.Object
    public setLength(arg0: long): void
    protected increaseLength(): long
    protected decreaseLength(): long
    public shiftLeft(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
    public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
    public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
    public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
    public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
    public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
    public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
    public setEmpty(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
    public setEmpty(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
    public getInt(arg0: int): int
    public getOptimisticType(): jdk.nashorn.internal.codegen.types.Type
    public getIntOptimistic(arg0: int, arg1: int): int
    public getDouble(arg0: int): double
    public getDoubleOptimistic(arg0: int, arg1: int): double
    public getObject(arg0: int): java.lang.Object
    public has(arg0: int): boolean
    public canDelete(arg0: int, arg1: boolean): boolean
    public canDelete(arg0: long, arg1: boolean): boolean
    public safeDelete(arg0: long, arg1: long, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
    public getDescriptor(arg0: jdk.nashorn.internal.objects.Global, arg1: int): jdk.nashorn.internal.runtime.PropertyDescriptor
    public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
    public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
    public convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ArrayData
    public push(arg0: boolean, ...arg1: java.lang.Object[]): jdk.nashorn.internal.runtime.arrays.ArrayData
    public push(arg0: boolean, arg1: java.lang.Object): jdk.nashorn.internal.runtime.arrays.ArrayData
    public pop(): java.lang.Object
    public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
    public fastSplice(arg0: int, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.ArrayData
    protected computeIteratorKeys(): java.util.List<java.lang.Long>
    public indexIterator(): java.util.Iterator<java.lang.Long>
    public static nextSize(arg0: int): int
    public findFastCallMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
    public findFastGetMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest, arg3: java.lang.String | string): jdk.internal.dynalink.linker.GuardedInvocation
    public findFastGetIndexMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
    public findFastSetIndexMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}