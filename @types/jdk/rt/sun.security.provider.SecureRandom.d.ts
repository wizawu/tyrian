declare namespace sun {
    namespace security {
        namespace provider {
            class SecureRandom extends java.security.SecureRandomSpi implements java.io.Serializable {
                public constructor()
                public engineGenerateSeed(arg0: int): byte[]
                public engineSetSeed(arg0: byte[]): void
                public engineNextBytes(arg0: byte[]): void
                public static class: java.lang.Class<any>
            }
        }
    }
}