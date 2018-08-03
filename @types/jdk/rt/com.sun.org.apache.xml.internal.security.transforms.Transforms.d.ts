declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace transforms {
                                class Transforms extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
                                    public static readonly TRANSFORM_C14N_OMIT_COMMENTS: string
                                    public static readonly TRANSFORM_C14N_WITH_COMMENTS: string
                                    public static readonly TRANSFORM_C14N11_OMIT_COMMENTS: string
                                    public static readonly TRANSFORM_C14N11_WITH_COMMENTS: string
                                    public static readonly TRANSFORM_C14N_EXCL_OMIT_COMMENTS: string
                                    public static readonly TRANSFORM_C14N_EXCL_WITH_COMMENTS: string
                                    public static readonly TRANSFORM_XSLT: string
                                    public static readonly TRANSFORM_BASE64_DECODE: string
                                    public static readonly TRANSFORM_XPATH: string
                                    public static readonly TRANSFORM_ENVELOPED_SIGNATURE: string
                                    public static readonly TRANSFORM_XPOINTER: string
                                    public static readonly TRANSFORM_XPATH2FILTER: string
                                    protected constructor()
                                    public constructor(arg0: org.w3c.dom.Document)
                                    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
                                    public setSecureValidation(arg0: boolean): void
                                    public addTransform(arg0: java.lang.String | string): void
                                    public addTransform(arg0: java.lang.String | string, arg1: org.w3c.dom.Element): void
                                    public addTransform(arg0: java.lang.String | string, arg1: org.w3c.dom.NodeList): void
                                    public performTransforms(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public performTransforms(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public getLength(): int
                                    public item(arg0: int): com.sun.org.apache.xml.internal.security.transforms.Transform
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