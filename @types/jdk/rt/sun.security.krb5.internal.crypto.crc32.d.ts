declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace crypto {
class crc32 extends java.security.MessageDigestSpi implements java.lang.Cloneable {
    public constructor()
    public clone(): java.lang.Object
    protected engineGetDigestLength(): int
    protected engineDigest(): byte[]
    protected engineDigest(arg0: byte[], arg1: int, arg2: int): int
    protected engineUpdate(arg0: byte): void
    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
    protected engineReset(): void
    public init(): void
    public static int2crc32(arg0: int): int
    public static printcrc32Table(): void
    public static byte2crc32sum(arg0: int, arg1: byte[], arg2: int): int
    public static byte2crc32sum(arg0: int, arg1: byte[]): int
    public static byte2crc32sum(arg0: byte[]): int
    public static byte2crc32(arg0: byte[]): int
    public static byte2crc32sum_bytes(arg0: byte[]): byte[]
    public static byte2crc32sum_bytes(arg0: byte[], arg1: int): byte[]
    public static int2quad(arg0: long): byte[]
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}