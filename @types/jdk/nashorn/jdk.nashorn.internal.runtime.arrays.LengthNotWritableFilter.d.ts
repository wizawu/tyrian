declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
                    class LengthNotWritableFilter extends jdk.nashorn.internal.runtime.arrays.ArrayFilter {
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public has(arg0: int): boolean
                        public setLength(arg0: long): void
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getInt(arg0: int): int
                        public getIntOptimistic(arg0: int, arg1: int): int
                        public getDouble(arg0: int): double
                        public getDoubleOptimistic(arg0: int, arg1: int): double
                        public getObject(arg0: int): java.lang.Object
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public indexIterator(): java.util.Iterator<java.lang.Long>
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}