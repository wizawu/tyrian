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
                                    protected abstract engineGetURI(): string
                                    protected abstract engineGetJCEAlgorithmString(): string
                                    protected abstract engineGetJCEProviderName(): string
                                    protected abstract engineUpdate(arg0: byte[]): void
                                    protected abstract engineUpdate(arg0: byte): void
                                    protected abstract engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                                    protected abstract engineInitSign(arg0: java.security.Key): void
                                    protected abstract engineInitSign(arg0: java.security.Key, arg1: java.security.SecureRandom): void
                                    protected abstract engineInitSign(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                                    protected abstract engineSign(): byte[]
                                    protected abstract engineInitVerify(arg0: java.security.Key): void
                                    protected abstract engineVerify(arg0: byte[]): boolean
                                    protected abstract engineSetParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
                                    protected engineGetContextFromElement(arg0: org.w3c.dom.Element): void
                                    protected abstract engineSetHMACOutputLength(arg0: int): void
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