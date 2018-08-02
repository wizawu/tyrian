declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace encryption {
                                interface AgreementMethod {
                                    getKANonce(): byte[]
                                    setKANonce(arg0: byte[]): void
                                    getAgreementMethodInformation(): java.util.Iterator<org.w3c.dom.Element>
                                    addAgreementMethodInformation(arg0: org.w3c.dom.Element): void
                                    revoveAgreementMethodInformation(arg0: org.w3c.dom.Element): void
                                    getOriginatorKeyInfo(): com.sun.org.apache.xml.internal.security.keys.KeyInfo
                                    setOriginatorKeyInfo(arg0: com.sun.org.apache.xml.internal.security.keys.KeyInfo): void
                                    getRecipientKeyInfo(): com.sun.org.apache.xml.internal.security.keys.KeyInfo
                                    setRecipientKeyInfo(arg0: com.sun.org.apache.xml.internal.security.keys.KeyInfo): void
                                    getAlgorithm(): string
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}