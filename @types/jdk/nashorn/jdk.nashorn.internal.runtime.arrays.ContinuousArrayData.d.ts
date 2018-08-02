declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
abstract class ContinuousArrayData extends jdk.nashorn.internal.runtime.arrays.ArrayData {
    protected static FAST_ACCESS_GUARD: java.lang.invoke.MethodHandle
    protected constructor(arg0: long)
    public hasRoomFor(arg0: int): boolean
    public isEmpty(): boolean
    public getElementGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
    public getElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
    protected throwHas(arg0: int): int
    public copy(): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
    public getElementType(): java.lang.Class<any>
    public getOptimisticType(): jdk.nashorn.internal.codegen.types.Type
    public getBoxedElementType(): java.lang.Class<any>
    public widest(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
    protected getContinuousElementGetter(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>, arg2: int): java.lang.invoke.MethodHandle
    protected getContinuousElementSetter(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>): java.lang.invoke.MethodHandle
    protected getContinuousElementGetter(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ContinuousArrayData>, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.Class<any>, arg3: int): java.lang.invoke.MethodHandle
    protected getContinuousElementSetter(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ContinuousArrayData>, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public findFastGetIndexMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
    public findFastSetIndexMethod(arg0: java.lang.Class<jdk.nashorn.internal.runtime.arrays.ArrayData>, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
    public fastPush(arg0: int): double
    public fastPush(arg0: long): double
    public fastPush(arg0: double): double
    public fastPush(arg0: java.lang.Object): double
    public fastPopInt(): int
    public fastPopDouble(): double
    public fastPopObject(): java.lang.Object
    public fastConcat(arg0: jdk.nashorn.internal.runtime.arrays.ContinuousArrayData): jdk.nashorn.internal.runtime.arrays.ContinuousArrayData
    public copy(): jdk.nashorn.internal.runtime.arrays.ArrayData
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}