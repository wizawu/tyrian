declare namespace sun {
    namespace security {
        namespace ssl {
            class CloneableDigest extends java.security.MessageDigest implements java.lang.Cloneable {
                protected engineGetDigestLength(): int
                protected engineUpdate(arg0: byte): void
                protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                protected engineDigest(): byte[]
                protected engineDigest(arg0: byte[], arg1: int, arg2: int): int
                protected engineReset(): void
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}