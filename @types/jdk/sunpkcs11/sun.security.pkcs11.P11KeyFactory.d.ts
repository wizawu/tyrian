declare namespace sun {
    namespace security {
        namespace pkcs11 {
            abstract class P11KeyFactory extends java.security.KeyFactorySpi {
                protected engineGetKeySpec<T extends java.security.spec.KeySpec>(arg0: java.security.Key, arg1: java.lang.Class<T>): T
                protected engineTranslateKey(arg0: java.security.Key): java.security.Key
                public static class: java.lang.Class<any>
            }
        }
    }
}