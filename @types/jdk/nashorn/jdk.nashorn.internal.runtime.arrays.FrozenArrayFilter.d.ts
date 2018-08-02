declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
                    class FrozenArrayFilter extends jdk.nashorn.internal.runtime.arrays.SealedArrayFilter {
                        public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public getDescriptor(arg0: jdk.nashorn.internal.objects.Global, arg1: int): jdk.nashorn.internal.runtime.PropertyDescriptor
                        public set(arg0: int, arg1: int, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: double, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public set(arg0: int, arg1: java.lang.Object, arg2: boolean): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public push(arg0: boolean, ...arg1: java.lang.Object[]): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public pop(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}