declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace crypto {
                    class ArcFourHmacEType extends sun.security.krb5.internal.crypto.EType {
                        public constructor()
                        public eType(): int
                        public minimumPadSize(): int
                        public confounderSize(): int
                        public checksumType(): int
                        public checksumSize(): int
                        public blockSize(): int
                        public keyType(): int
                        public keySize(): int
                        public encrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public encrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public decryptedData(arg0: byte[]): byte[]
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}