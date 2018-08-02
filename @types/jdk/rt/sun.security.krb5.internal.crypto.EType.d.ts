declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace crypto {
                    abstract class EType {
                        public constructor()
                        public static initStatic(): void
                        public static getInstance(arg0: int): sun.security.krb5.internal.crypto.EType
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
                        public dataSize(arg0: byte[]): int
                        public padSize(arg0: byte[]): int
                        public startOfChecksum(): int
                        public startOfData(): int
                        public startOfPad(arg0: byte[]): int
                        public decryptedData(arg0: byte[]): byte[]
                        public static getBuiltInDefaults(): int[]
                        public static getDefaults(arg0: java.lang.String | string): int[]
                        public static getDefaults(arg0: java.lang.String | string, arg1: sun.security.krb5.EncryptionKey[]): int[]
                        public static isSupported(arg0: int, arg1: int[]): boolean
                        public static isSupported(arg0: int): boolean
                        public static toString(arg0: int): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}