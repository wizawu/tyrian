declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
                    class SparseArrayData extends jdk.nashorn.internal.runtime.arrays.ArrayData {
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public asObjectArray(): java.lang.Object[]
                        public shiftLeft(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public setEmpty(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public setEmpty(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                        public getInt(arg0: int): int
                        public getIntOptimistic(arg0: int, arg1: int): int
                        public getDouble(arg0: int): double
                        public getDoubleOptimistic(arg0: int, arg1: int): double
                        public getObject(arg0: int): java.lang.Object
                        public has(arg0: int): boolean
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public pop(): java.lang.Object
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public nextIndex(arg0: long): long
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}