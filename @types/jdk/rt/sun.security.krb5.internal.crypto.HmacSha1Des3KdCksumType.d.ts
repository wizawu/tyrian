declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace crypto {
                    class HmacSha1Des3KdCksumType extends sun.security.krb5.internal.crypto.CksumType {
                        public constructor()
                        public confounderSize(): int
                        public cksumType(): int
                        public isSafe(): boolean
                        public cksumSize(): int
                        public keyType(): int
                        public keySize(): int
                        public calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public calculateKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int): byte[]
                        public verifyKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}