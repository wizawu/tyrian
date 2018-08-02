declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace encryption {
                                class XMLCipher$Factory$EncryptionPropertyImpl implements com.sun.org.apache.xml.internal.security.encryption.EncryptionProperty {
                                    public constructor(arg0: com.sun.org.apache.xml.internal.security.encryption.XMLCipher$Factory)
                                    public getTarget(): string
                                    public setTarget(arg0: java.lang.String | string): void
                                    public getId(): string
                                    public setId(arg0: java.lang.String | string): void
                                    public getAttribute(arg0: java.lang.String | string): string
                                    public setAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public getEncryptionInformation(): java.util.Iterator<org.w3c.dom.Element>
                                    public addEncryptionInformation(arg0: org.w3c.dom.Element): void
                                    public removeEncryptionInformation(arg0: org.w3c.dom.Element): void
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