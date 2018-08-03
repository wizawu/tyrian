declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
                    abstract class ArrayData {
                        protected static readonly CHUNK_SIZE: int
                        public static readonly EMPTY_ARRAY: jdk.nashorn.internal.runtime.arrays.ArrayData
                        protected static readonly THROW_UNWARRANTED: jdk.nashorn.internal.codegen.CompilerConstants$Call
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
                        public abstract copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public abstract asObjectArray(): java.lang.Object[]
                        public asArrayOfType(arg0: java.lang.Class<any>): java.lang.Object
                        public setLength(arg0: long): void
                        protected increaseLength(): long
                        protected decreaseLength(): long
                        public abstract shiftLeft(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public abstract shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public abstract ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public abstract shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public abstract set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public abstract set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public abstract set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public setEmpty(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public setEmpty(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public abstract getInt(arg0: int): int
                        public getOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                        public getIntOptimistic(arg0: int, arg1: int): int
                        public abstract getDouble(arg0: int): double
                        public getDoubleOptimistic(arg0: int, arg1: int): double
                        public abstract getObject(arg0: int): java.lang.Object
                        public abstract has(arg0: int): boolean
                        public canDelete(arg0: int, arg1: boolean): boolean
                        public canDelete(arg0: long, arg1: boolean): boolean
                        public safeDelete(arg0: long, arg1: long, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getDescriptor(arg0: jdk.nashorn.internal.objects.Global, arg1: int): jdk.nashorn.internal.runtime.PropertyDescriptor
                        public abstract delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public abstract delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public abstract convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public push(arg0: boolean, ...arg1: java.lang.Object[]): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public push(arg0: boolean, arg1: java.lang.Object): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public abstract pop(): java.lang.Object
                        public abstract slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
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