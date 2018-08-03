declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace algorithms {
                                namespace implementations {
                                    abstract class IntegrityHmac extends com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithmSpi {
                                        public abstract engineGetURI(): string
                                        public constructor()
                                        protected engineSetParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
                                        public reset(): void
                                        protected engineVerify(arg0: byte[]): boolean
                                        protected engineInitVerify(arg0: java.security.Key): void
                                        protected engineSign(): byte[]
                                        protected engineInitSign(arg0: java.security.Key): void
                                        protected engineInitSign(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                                        protected engineInitSign(arg0: java.security.Key, arg1: java.security.SecureRandom): void
                                        protected engineUpdate(arg0: byte[]): void
                                        protected engineUpdate(arg0: byte): void
                                        protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                                        protected engineGetJCEAlgorithmString(): string
                                        protected engineGetJCEProviderName(): string
                                        protected engineSetHMACOutputLength(arg0: int): void
                                        protected engineGetContextFromElement(arg0: org.w3c.dom.Element): void
                                        public engineAddContextToElement(arg0: org.w3c.dom.Element): void
                                        public static class: java.lang.Class<any>
                                    }
                                    interface IntegrityHmac$$Lambda extends com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithmSpi {
                                        (): string
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}