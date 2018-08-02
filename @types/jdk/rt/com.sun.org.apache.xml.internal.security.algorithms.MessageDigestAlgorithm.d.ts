declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace algorithms {
class MessageDigestAlgorithm extends com.sun.org.apache.xml.internal.security.algorithms.Algorithm {
    public static ALGO_ID_DIGEST_NOT_RECOMMENDED_MD5: string
    public static ALGO_ID_DIGEST_SHA1: string
    public static ALGO_ID_DIGEST_SHA256: string
    public static ALGO_ID_DIGEST_SHA384: string
    public static ALGO_ID_DIGEST_SHA512: string
    public static ALGO_ID_DIGEST_RIPEMD160: string
    public static getInstance(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.algorithms.MessageDigestAlgorithm
    public getAlgorithm(): java.security.MessageDigest
    public static isEqual(arg0: byte[], arg1: byte[]): boolean
    public digest(): byte[]
    public digest(arg0: byte[]): byte[]
    public digest(arg0: byte[], arg1: int, arg2: int): int
    public getJCEAlgorithmString(): string
    public getJCEProvider(): java.security.Provider
    public getDigestLength(): int
    public reset(): void
    public update(arg0: byte[]): void
    public update(arg0: byte): void
    public update(arg0: byte[], arg1: int, arg2: int): void
    public getBaseNamespace(): string
    public getBaseLocalName(): string
    public static class: java.lang.Class<any>
}

                            }
                        }
                    }
                }
            }
        }
    }
}