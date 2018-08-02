declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace support {
                class TypeConverterFactory {
                    public constructor(arg0: java.lang.Iterable<jdk.internal.dynalink.linker.GuardingTypeConverterFactory>, arg1: jdk.internal.dynalink.linker.MethodTypeConversionStrategy | jdk.internal.dynalink.linker.MethodTypeConversionStrategy$$Lambda)
                    public asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public canConvert(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                    public compareConversion(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.Class<any>): jdk.internal.dynalink.linker.ConversionComparator$Comparison
                    public getTypeConverter(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}