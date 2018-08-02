declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
                    abstract class TypedArrayData<T extends java.nio.Buffer> extends jdk.nashorn.internal.runtime.arrays.ContinuousArrayData {
                        protected nb: T
                        protected constructor(arg0: T, arg1: int)
                        public getElementLength(): int
                        public isUnsigned(): boolean
                        public isClamped(): boolean
                        public canDelete(arg0: int, arg1: boolean): boolean
                        public canDelete(arg0: long, arg1: boolean): boolean
                        public copy(): jdk.nashorn.internal.runtime.arrays.TypedArrayData<T>
                        public asObjectArray(): java.lang.Object[]
                        public shiftLeft(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shiftRight(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public ensure(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public shrink(arg0: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public has(arg0: int): boolean
                        public delete(arg0: int): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public delete(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        public convert(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.TypedArrayData<T>
                        public pop(): java.lang.Object
                        public slice(arg0: long, arg1: long): jdk.nashorn.internal.runtime.arrays.ArrayData
                        protected getGetElem(): java.lang.invoke.MethodHandle
                        protected getSetElem(): java.lang.invoke.MethodHandle
                        public getElementGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                        public getElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        protected getContinuousElementSetter(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ContinuousArrayData>, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        public findFastGetIndexMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                        public findFastSetIndexMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
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