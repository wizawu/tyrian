declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace crypto {
abstract class DesCbcEType extends sun.security.krb5.internal.crypto.EType {
    protected calculateChecksum(arg0: byte[], arg1: int): byte[]
    public blockSize(): int
    public keyType(): int
    public keySize(): int
    public encrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
    public encrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
    public decrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
    public decrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
    protected isChecksumValid(arg0: byte[]): boolean
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}