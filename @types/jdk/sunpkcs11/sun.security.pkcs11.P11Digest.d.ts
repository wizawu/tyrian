declare namespace sun {
    namespace security {
        namespace pkcs11 {
            class P11Digest extends java.security.MessageDigestSpi implements java.lang.Cloneable {
                protected engineGetDigestLength(): int
                protected engineReset(): void
                protected engineDigest(): byte[]
                protected engineDigest(arg0: byte[], arg1: int, arg2: int): int
                protected engineUpdate(arg0: byte): void
                protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                protected implUpdate(arg0: javax.crypto.SecretKey): void
                protected engineUpdate(arg0: java.nio.ByteBuffer): void
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}