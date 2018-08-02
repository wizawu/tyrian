declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace linker {
                    class NashornLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker , jdk.internal.dynalink.linker.GuardingTypeConverterFactory , jdk.internal.dynalink.linker.ConversionComparator {
                        public canLinkType(arg0: java.lang.Class<any>): boolean
                        public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                        public convertToType(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): jdk.internal.dynalink.linker.GuardedTypeConversion
                        public compareConversion(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.Class<any>): jdk.internal.dynalink.linker.ConversionComparator$Comparison
                        public static class: java.lang.Class<any>
                    }
                    class NashornLinker$$Lambda implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker , jdk.internal.dynalink.linker.GuardingTypeConverterFactory , jdk.internal.dynalink.linker.ConversionComparator {
                        public (arg0: java.lang.Class<any>): boolean
                    }
                }
            }
        }
    }
}