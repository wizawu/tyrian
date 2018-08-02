declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace linker {
                interface LinkerServices {
                    asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    asTypeLosslessReturn(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    getTypeConverter(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    canConvert(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                    getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    compareConversion(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.Class<any>): jdk.internal.dynalink.linker.ConversionComparator$Comparison
                    filterInternalObjects(arg0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                }
            }
        }
    }
}