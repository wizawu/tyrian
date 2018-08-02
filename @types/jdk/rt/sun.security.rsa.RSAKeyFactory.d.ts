declare namespace sun {
    namespace security {
        namespace rsa {
            class RSAKeyFactory extends java.security.KeyFactorySpi {
                public static MIN_MODLEN: int
                public static MAX_MODLEN: int
                public static MAX_MODLEN_RESTRICT_EXP: int
                public static MAX_RESTRICTED_EXPLEN: int
                public constructor()
                public static toRSAKey(arg0: java.security.Key): java.security.interfaces.RSAKey
                public static checkKeyLengths(arg0: int, arg1: java.math.BigInteger, arg2: int, arg3: int): void
                protected engineTranslateKey(arg0: java.security.Key): java.security.Key
                protected engineGeneratePublic(arg0: java.security.spec.KeySpec): java.security.PublicKey
                protected engineGeneratePrivate(arg0: java.security.spec.KeySpec): java.security.PrivateKey
                protected engineGetKeySpec<T extends java.security.spec.KeySpec>(arg0: java.security.Key, arg1: java.lang.Class<T>): T
                public static class: java.lang.Class<any>
            }
        }
    }
}