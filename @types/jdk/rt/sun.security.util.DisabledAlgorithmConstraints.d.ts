declare namespace sun {
    namespace security {
        namespace util {
            class DisabledAlgorithmConstraints extends sun.security.util.AbstractAlgorithmConstraints {
                public static readonly PROPERTY_CERTPATH_DISABLED_ALGS: string
                public static readonly PROPERTY_TLS_DISABLED_ALGS: string
                public static readonly PROPERTY_JAR_DISABLED_ALGS: string
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: sun.security.util.AlgorithmDecomposer)
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.lang.String | string, arg2: java.security.AlgorithmParameters): boolean
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.security.Key): boolean
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.lang.String | string, arg2: java.security.Key, arg3: java.security.AlgorithmParameters): boolean
                public permits(arg0: sun.security.util.ConstraintsParameters): void
                public permits(arg0: java.lang.String | string, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.lang.String | string): void
                public permits(arg0: java.lang.String | string, arg1: sun.security.util.ConstraintsParameters): void
                public checkProperty(arg0: java.lang.String | string): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}