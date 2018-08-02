declare namespace java {
    namespace security {
        abstract class KeyFactorySpi {
            public constructor()
            protected engineGeneratePublic(arg0: java.security.spec.KeySpec): java.security.PublicKey
            protected engineGeneratePrivate(arg0: java.security.spec.KeySpec): java.security.PrivateKey
            protected engineGetKeySpec<T extends java.security.spec.KeySpec>(arg0: java.security.Key, arg1: java.lang.Class<T>): T
            protected engineTranslateKey(arg0: java.security.Key): java.security.Key
            public static class: java.lang.Class<any>
        }
    }
}