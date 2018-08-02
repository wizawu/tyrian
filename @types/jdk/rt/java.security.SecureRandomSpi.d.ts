declare namespace java {
    namespace security {
        abstract class SecureRandomSpi implements java.io.Serializable {
            public constructor()
            protected engineSetSeed(arg0: byte[]): void
            protected engineNextBytes(arg0: byte[]): void
            protected engineGenerateSeed(arg0: int): byte[]
            public static class: java.lang.Class<any>
        }
    }
}