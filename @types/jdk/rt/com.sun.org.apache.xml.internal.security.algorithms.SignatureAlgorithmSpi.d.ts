declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace algorithms {
abstract class SignatureAlgorithmSpi {
    public constructor()
    protected engineGetURI(): string
    protected engineGetJCEAlgorithmString(): string
    protected engineGetJCEProviderName(): string
    protected engineUpdate(arg0: byte[]): void
    protected engineUpdate(arg0: byte): void
    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
    protected engineInitSign(arg0: java.security.Key): void
    protected engineInitSign(arg0: java.security.Key, arg1: java.security.SecureRandom): void
    protected engineInitSign(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
    protected engineSign(): byte[]
    protected engineInitVerify(arg0: java.security.Key): void
    protected engineVerify(arg0: byte[]): boolean
    protected engineSetParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
    protected engineGetContextFromElement(arg0: org.w3c.dom.Element): void
    protected engineSetHMACOutputLength(arg0: int): void
    public reset(): void
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