declare namespace javax {
    namespace crypto {
        abstract class SecretKeyFactorySpi {
            public constructor()
            protected abstract engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
            protected abstract engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
            protected abstract engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
            public static class: java.lang.Class<any>
        }
    }
}