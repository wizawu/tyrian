declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
                    class NumberArrayData extends jdk.nashorn.internal.runtime.arrays.ContinuousArrayData implements jdk.nashorn.internal.runtime.arrays.NumericElements {
                        public getElementType(): java.lang.Class<any>
                        public getBoxedElementType(): java.lang.Class<any>
                        public getElementWeight(): int
                        public widest(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public copy(): jdk.nashorn.internal.runtime.arrays.NumberArrayData
                        public asObjectArray(): java.lang.Object[]
                        public asArrayOfType(arg0: java.lang.Class<any>): java.lang.Object
                        public convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public shiftLeft(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getElementGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                        public getElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        public getInt(arg0: int): int
                        public getDouble(arg0: int): double
                        public getDoubleOptimistic(arg0: int, arg1: int): double
                        public getObject(arg0: int): java.lang.Object
                        public has(arg0: int): boolean
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public pop(): java.lang.Object
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public fastSplice(arg0: int, arg1: int, arg2: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public fastPush(arg0: int): double
                        public fastPush(arg0: long): double
                        public fastPush(arg0: double): double
                        public fastPopDouble(): double
                        public fastPopObject(): java.lang.Object
                        public fastConcat(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public toString(): string
                        public copy(): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
                        public convert(arg0: java.lang.Class): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}