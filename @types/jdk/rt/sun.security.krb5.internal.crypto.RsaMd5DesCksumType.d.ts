declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace crypto {
                    class RsaMd5DesCksumType extends sun.security.krb5.internal.crypto.CksumType {
                        public constructor()
                        public confounderSize(): int
                        public cksumType(): int
                        public isSafe(): boolean
                        public cksumSize(): int
                        public keyType(): int
                        public keySize(): int
                        public calculateKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int): byte[]
                        public verifyKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int): boolean
                        public calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}