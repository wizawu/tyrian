declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace signature {
                                class SignatureProperties extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
                                    public constructor(arg0: org.w3c.dom.Document)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public getLength(): int
                                    public item(arg0: int): com.sun.org.apache.xml.internal.security.signature.SignatureProperty
                                    public setId(arg0: java.lang.String | string): void
                                    public getId(): string
                                    public addSignatureProperty(arg0: com.sun.org.apache.xml.internal.security.signature.SignatureProperty): void
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