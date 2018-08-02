declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
class DOMXMLSignature extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.XMLSignature {
    public constructor(arg0: javax.xml.crypto.dsig.SignedInfo, arg1: javax.xml.crypto.dsig.keyinfo.KeyInfo, arg2: java.util.List<javax.xml.crypto.dsig.XMLObject>, arg3: java.lang.String | string, arg4: java.lang.String | string)
    public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
    public getId(): string
    public getKeyInfo(): javax.xml.crypto.dsig.keyinfo.KeyInfo
    public getSignedInfo(): javax.xml.crypto.dsig.SignedInfo
    public getObjects(): java.util.List
    public getSignatureValue(): javax.xml.crypto.dsig.XMLSignature$SignatureValue
    public getKeySelectorResult(): javax.xml.crypto.KeySelectorResult
    public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
    public marshal(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node, arg2: java.lang.String | string, arg3: javax.xml.crypto.dom.DOMCryptoContext): void
    public validate(arg0: javax.xml.crypto.dsig.XMLValidateContext): boolean
    public sign(arg0: javax.xml.crypto.dsig.XMLSignContext): void
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