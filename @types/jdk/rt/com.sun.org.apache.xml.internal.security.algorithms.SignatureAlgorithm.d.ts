declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace algorithms {
                                class SignatureAlgorithm extends com.sun.org.apache.xml.internal.security.algorithms.Algorithm {
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: int)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: boolean)
                                    public sign(): byte[]
                                    public getJCEAlgorithmString(): string
                                    public getJCEProviderName(): string
                                    public update(arg0: byte[]): void
                                    public update(arg0: byte): void
                                    public update(arg0: byte[], arg1: int, arg2: int): void
                                    public initSign(arg0: java.security.Key): void
                                    public initSign(arg0: java.security.Key, arg1: java.security.SecureRandom): void
                                    public initSign(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                                    public setParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
                                    public initVerify(arg0: java.security.Key): void
                                    public verify(arg0: byte[]): boolean
                                    public getURI(): string
                                    public static register(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public static register(arg0: java.lang.String | string, arg1: java.lang.Class<com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithmSpi>): void
                                    public static registerDefaultAlgorithms(): void
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