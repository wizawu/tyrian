declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace encryption {
class XMLCipher$Factory$EncryptionMethodImpl implements com.sun.org.apache.xml.internal.security.encryption.EncryptionMethod {
    public constructor(arg0: com.sun.org.apache.xml.internal.security.encryption.XMLCipher$Factory, arg1: java.lang.String | string)
    public getAlgorithm(): string
    public getKeySize(): int
    public setKeySize(arg0: int): void
    public getOAEPparams(): byte[]
    public setOAEPparams(arg0: byte[]): void
    public setDigestAlgorithm(arg0: java.lang.String | string): void
    public getDigestAlgorithm(): string
    public setMGFAlgorithm(arg0: java.lang.String | string): void
    public getMGFAlgorithm(): string
    public getEncryptionMethodInformation(): java.util.Iterator<org.w3c.dom.Element>
    public addEncryptionMethodInformation(arg0: org.w3c.dom.Element): void
    public removeEncryptionMethodInformation(arg0: org.w3c.dom.Element): void
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