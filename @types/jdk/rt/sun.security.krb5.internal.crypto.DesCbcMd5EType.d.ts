declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace crypto {
                    class DesCbcMd5EType extends sun.security.krb5.internal.crypto.DesCbcEType {
                        public constructor()
                        public eType(): int
                        public minimumPadSize(): int
                        public confounderSize(): int
                        public checksumType(): int
                        public checksumSize(): int
                        protected calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public encrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public encrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public keySize(): int
                        public keyType(): int
                        public blockSize(): int
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}