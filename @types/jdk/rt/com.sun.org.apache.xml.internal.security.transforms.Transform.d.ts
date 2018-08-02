declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace transforms {
class Transform extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string)
    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: org.w3c.dom.Element)
    public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: org.w3c.dom.NodeList)
    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
    public static register(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public static register(arg0: java.lang.String | string, arg1: java.lang.Class<com.sun.org.apache.xml.internal.security.transforms.TransformSpi>): void
    public static registerDefaultAlgorithms(): void
    public getURI(): string
    public performTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
    public performTransform(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
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