declare namespace sun {
    namespace security {
        namespace provider {
            class ParameterCache {
                public static getCachedDSAParameterSpec(arg0: int, arg1: int): java.security.spec.DSAParameterSpec
                public static getCachedDHParameterSpec(arg0: int): javax.crypto.spec.DHParameterSpec
                public static getDSAParameterSpec(arg0: int, arg1: java.security.SecureRandom): java.security.spec.DSAParameterSpec
                public static getDSAParameterSpec(arg0: int, arg1: int, arg2: java.security.SecureRandom): java.security.spec.DSAParameterSpec
                public static getDHParameterSpec(arg0: int, arg1: java.security.SecureRandom): javax.crypto.spec.DHParameterSpec
                public static getNewDSAParameterSpec(arg0: int, arg1: int, arg2: java.security.SecureRandom): java.security.spec.DSAParameterSpec
                public static class: java.lang.Class<any>
            }
        }
    }
}