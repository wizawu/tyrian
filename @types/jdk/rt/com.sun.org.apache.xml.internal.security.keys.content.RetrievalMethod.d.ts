declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace keys {
                                namespace content {
class RetrievalMethod extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy implements com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent {
    public static TYPE_DSA: string
    public static TYPE_RSA: string
    public static TYPE_PGP: string
    public static TYPE_SPKI: string
    public static TYPE_MGMT: string
    public static TYPE_X509: string
    public static TYPE_RAWX509: string
    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.transforms.Transforms, arg3: java.lang.String | string)
    public getURIAttr(): org.w3c.dom.Attr
    public getURI(): string
    public getType(): string
    public getTransforms(): com.sun.org.apache.xml.internal.security.transforms.Transforms
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
}