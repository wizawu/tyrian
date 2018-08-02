declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace encryption {
class XMLCipher$Factory$AgreementMethodImpl implements com.sun.org.apache.xml.internal.security.encryption.AgreementMethod {
    public constructor(arg0: com.sun.org.apache.xml.internal.security.encryption.XMLCipher$Factory, arg1: java.lang.String | string)
    public getKANonce(): byte[]
    public setKANonce(arg0: byte[]): void
    public getAgreementMethodInformation(): java.util.Iterator<org.w3c.dom.Element>
    public addAgreementMethodInformation(arg0: org.w3c.dom.Element): void
    public revoveAgreementMethodInformation(arg0: org.w3c.dom.Element): void
    public getOriginatorKeyInfo(): com.sun.org.apache.xml.internal.security.keys.KeyInfo
    public setOriginatorKeyInfo(arg0: com.sun.org.apache.xml.internal.security.keys.KeyInfo): void
    public getRecipientKeyInfo(): com.sun.org.apache.xml.internal.security.keys.KeyInfo
    public setRecipientKeyInfo(arg0: com.sun.org.apache.xml.internal.security.keys.KeyInfo): void
    public getAlgorithm(): string
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