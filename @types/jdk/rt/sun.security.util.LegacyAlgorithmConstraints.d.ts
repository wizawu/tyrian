declare namespace sun {
    namespace security {
        namespace util {
            class LegacyAlgorithmConstraints extends sun.security.util.AbstractAlgorithmConstraints {
                public static PROPERTY_TLS_LEGACY_ALGS: string
                public constructor(arg0: java.lang.String | string, arg1: sun.security.util.AlgorithmDecomposer)
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.lang.String | string, arg2: java.security.AlgorithmParameters): boolean
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.security.Key): boolean
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.lang.String | string, arg2: java.security.Key, arg3: java.security.AlgorithmParameters): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}