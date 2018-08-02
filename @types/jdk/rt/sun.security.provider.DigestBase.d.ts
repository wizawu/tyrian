declare namespace sun {
    namespace security {
        namespace provider {
abstract class DigestBase extends java.security.MessageDigestSpi implements java.lang.Cloneable {
    protected engineGetDigestLength(): int
    protected engineUpdate(arg0: byte): void
    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
    protected engineReset(): void
    protected engineDigest(): byte[]
    protected engineDigest(arg0: byte[], arg1: int, arg2: int): int
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}