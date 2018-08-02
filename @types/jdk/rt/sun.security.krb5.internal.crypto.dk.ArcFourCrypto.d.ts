declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace crypto {
                    namespace dk {
                        class ArcFourCrypto extends sun.security.krb5.internal.crypto.dk.DkCrypto {
                            public constructor(arg0: int)
                            protected getKeySeedLength(): int
                            protected randomToKey(arg0: byte[]): byte[]
                            public stringToKey(arg0: char[]): byte[]
                            protected getCipher(arg0: byte[], arg1: byte[], arg2: int): javax.crypto.Cipher
                            public getChecksumLength(): int
                            protected getHmac(arg0: byte[], arg1: byte[]): byte[]
                            public calculateChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int, arg4: int): byte[]
                            public encryptSeq(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                            public decryptSeq(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                            public encrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: byte[], arg5: int, arg6: int): byte[]
                            public encryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                            public decrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                            public decryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int, arg6: byte[]): byte[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}