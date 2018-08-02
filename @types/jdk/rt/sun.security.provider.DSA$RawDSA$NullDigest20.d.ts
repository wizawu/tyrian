declare namespace sun {
    namespace security {
        namespace provider {
            class DSA$RawDSA$NullDigest20 extends java.security.MessageDigest {
                protected constructor()
                protected engineUpdate(arg0: byte): void
                protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                protected engineUpdate(arg0: java.nio.ByteBuffer): void
                protected engineDigest(): byte[]
                protected engineDigest(arg0: byte[], arg1: int, arg2: int): int
                protected engineReset(): void
                protected engineGetDigestLength(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}