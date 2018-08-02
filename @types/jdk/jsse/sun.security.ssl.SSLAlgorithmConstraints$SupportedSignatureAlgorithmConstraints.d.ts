declare namespace sun {
    namespace security {
        namespace ssl {
            class SSLAlgorithmConstraints$SupportedSignatureAlgorithmConstraints implements java.security.AlgorithmConstraints {
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.lang.String | string, arg2: java.security.AlgorithmParameters): boolean
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.security.Key): boolean
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.lang.String | string, arg2: java.security.Key, arg3: java.security.AlgorithmParameters): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}