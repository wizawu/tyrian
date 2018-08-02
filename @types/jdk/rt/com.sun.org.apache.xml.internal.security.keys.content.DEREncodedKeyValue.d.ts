declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace keys {
                                namespace content {
class DEREncodedKeyValue extends com.sun.org.apache.xml.internal.security.utils.Signature11ElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent {
    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
    public constructor(arg0: org.w3c.dom.Document, arg1: java.security.PublicKey)
    public constructor(arg0: org.w3c.dom.Document, arg1: byte[])
    public setId(arg0: java.lang.String | string): void
    public getId(): string
    public getBaseLocalName(): string
    public getPublicKey(): java.security.PublicKey
    protected getEncodedDER(arg0: java.security.PublicKey): byte[]
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
}