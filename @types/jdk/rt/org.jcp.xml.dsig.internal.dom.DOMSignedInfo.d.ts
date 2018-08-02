declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
class DOMSignedInfo extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.SignedInfo {
    public constructor(arg0: javax.xml.crypto.dsig.CanonicalizationMethod, arg1: javax.xml.crypto.dsig.SignatureMethod, arg2: java.util.List<javax.xml.crypto.dsig.Reference>)
    public constructor(arg0: javax.xml.crypto.dsig.CanonicalizationMethod, arg1: javax.xml.crypto.dsig.SignatureMethod, arg2: java.util.List<javax.xml.crypto.dsig.Reference>, arg3: java.lang.String | string)
    public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
    public getCanonicalizationMethod(): javax.xml.crypto.dsig.CanonicalizationMethod
    public getSignatureMethod(): javax.xml.crypto.dsig.SignatureMethod
    public getId(): string
    public getReferences(): java.util.List
    public getCanonicalizedData(): java.io.InputStream
    public canonicalize(arg0: javax.xml.crypto.XMLCryptoContext, arg1: java.io.ByteArrayOutputStream): void
    public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}