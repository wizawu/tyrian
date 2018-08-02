declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace encryption {
                                interface EncryptionMethod {
                                    getAlgorithm(): string
                                    getKeySize(): int
                                    setKeySize(arg0: int): void
                                    getOAEPparams(): byte[]
                                    setOAEPparams(arg0: byte[]): void
                                    setDigestAlgorithm(arg0: java.lang.String | string): void
                                    getDigestAlgorithm(): string
                                    setMGFAlgorithm(arg0: java.lang.String | string): void
                                    getMGFAlgorithm(): string
                                    getEncryptionMethodInformation(): java.util.Iterator<org.w3c.dom.Element>
                                    addEncryptionMethodInformation(arg0: org.w3c.dom.Element): void
                                    removeEncryptionMethodInformation(arg0: org.w3c.dom.Element): void
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}