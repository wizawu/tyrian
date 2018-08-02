declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace linker {
                interface GuardingTypeConverterFactory {
                    convertToType(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): jdk.internal.dynalink.linker.GuardedTypeConversion
                }
                interface GuardingTypeConverterFactory$$Lambda {
                    (arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): jdk.internal.dynalink.linker.GuardedTypeConversion
                }
            }
        }
    }
}