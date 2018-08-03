declare namespace java {
    namespace security {
        abstract class SecureRandomSpi implements java.io.Serializable {
            public constructor()
            protected abstract engineSetSeed(arg0: byte[]): void
            protected abstract engineNextBytes(arg0: byte[]): void
            protected abstract engineGenerateSeed(arg0: int): byte[]
            public static class: java.lang.Class<any>
        }
    }
}