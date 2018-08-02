declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace signature {
                                class Reference extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
                                    public static OBJECT_URI: string
                                    public static MANIFEST_URI: string
                                    public static MAXIMUM_TRANSFORM_COUNT: int
                                    protected constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xml.internal.security.signature.Manifest, arg4: com.sun.org.apache.xml.internal.security.transforms.Transforms, arg5: java.lang.String | string)
                                    protected constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.signature.Manifest)
                                    protected constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.signature.Manifest, arg3: boolean)
                                    public getMessageDigestAlgorithm(): com.sun.org.apache.xml.internal.security.algorithms.MessageDigestAlgorithm
                                    public setURI(arg0: java.lang.String | string): void
                                    public getURI(): string
                                    public setId(arg0: java.lang.String | string): void
                                    public getId(): string
                                    public setType(arg0: java.lang.String | string): void
                                    public getType(): string
                                    public typeIsReferenceToObject(): boolean
                                    public typeIsReferenceToManifest(): boolean
                                    public generateDigestValue(): void
                                    public getContentsBeforeTransformation(): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public getContentsAfterTransformation(): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public getNodesetBeforeFirstCanonicalization(): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public getHTMLRepresentation(): string
                                    public getTransformsOutput(): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public getReferenceData(): com.sun.org.apache.xml.internal.security.signature.reference.ReferenceData
                                    protected dereferenceURIandPerformTransforms(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                    public getTransforms(): com.sun.org.apache.xml.internal.security.transforms.Transforms
                                    public getReferencedBytes(): byte[]
                                    public getDigestValue(): byte[]
                                    public verify(): boolean
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