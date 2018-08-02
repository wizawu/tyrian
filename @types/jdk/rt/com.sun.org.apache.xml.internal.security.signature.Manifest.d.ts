declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace signature {
class Manifest extends com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy {
    public static MAXIMUM_REFERENCE_COUNT: int
    public constructor(arg0: org.w3c.dom.Document)
    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: boolean)
    public addDocument(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.security.transforms.Transforms, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string): void
    public generateDigestValues(): void
    public getLength(): int
    public item(arg0: int): com.sun.org.apache.xml.internal.security.signature.Reference
    public setId(arg0: java.lang.String | string): void
    public getId(): string
    public verifyReferences(): boolean
    public verifyReferences(arg0: boolean): boolean
    public getVerificationResult(arg0: int): boolean
    public addResourceResolver(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver): void
    public addResourceResolver(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi): void
    public getPerManifestResolvers(): java.util.List<com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver>
    public getResolverProperties(): java.util.Map<java.lang.String, java.lang.String>
    public setResolverProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public getResolverProperty(arg0: java.lang.String | string): string
    public getSignedContentItem(arg0: int): byte[]
    public getReferencedContentBeforeTransformsItem(arg0: int): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
    public getReferencedContentAfterTransformsItem(arg0: int): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
    public getSignedContentLength(): int
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