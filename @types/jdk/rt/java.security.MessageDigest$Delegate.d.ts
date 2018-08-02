declare namespace java {
    namespace security {
        class MessageDigest$Delegate extends java.security.MessageDigest {
            public constructor(arg0: java.security.MessageDigestSpi, arg1: java.lang.String | string)
            public clone(): java.lang.Object
            protected engineGetDigestLength(): int
            protected engineUpdate(arg0: byte): void
            protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
            protected engineUpdate(arg0: java.nio.ByteBuffer): void
            protected engineDigest(): byte[]
            protected engineDigest(arg0: byte[], arg1: int, arg2: int): int
            protected engineReset(): void
            public static class: java.lang.Class<any>
        }
    }
}