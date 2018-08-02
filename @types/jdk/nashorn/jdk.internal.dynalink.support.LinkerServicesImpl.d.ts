declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace support {
                class LinkerServicesImpl implements jdk.internal.dynalink.linker.LinkerServices {
                    public constructor(arg0: jdk.internal.dynalink.support.TypeConverterFactory, arg1: jdk.internal.dynalink.linker.GuardingDynamicLinker | jdk.internal.dynalink.linker.GuardingDynamicLinker$$Lambda, arg2: jdk.internal.dynalink.linker.MethodHandleTransformer | jdk.internal.dynalink.linker.MethodHandleTransformer$$Lambda)
                    public canConvert(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                    public asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public asTypeLosslessReturn(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public getTypeConverter(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public compareConversion(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.Class<any>): jdk.internal.dynalink.linker.ConversionComparator$Comparison
                    public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public filterInternalObjects(arg0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public static getCurrentLinkRequest(): jdk.internal.dynalink.linker.LinkRequest
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}