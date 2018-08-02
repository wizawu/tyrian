declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace crypto {
                    namespace dk {
                        class Des3DkCrypto extends sun.security.krb5.internal.crypto.dk.DkCrypto {
                            public constructor()
                            protected getKeySeedLength(): int
                            public stringToKey(arg0: char[]): byte[]
                            public parityFix(arg0: byte[]): byte[]
                            protected randomToKey(arg0: byte[]): byte[]
                            protected getCipher(arg0: byte[], arg1: byte[], arg2: int): javax.crypto.Cipher
                            public getChecksumLength(): int
                            protected getHmac(arg0: byte[], arg1: byte[]): byte[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}