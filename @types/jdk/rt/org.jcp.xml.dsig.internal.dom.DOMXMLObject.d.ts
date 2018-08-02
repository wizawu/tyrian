declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
class DOMXMLObject extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.XMLObject {
    public constructor(arg0: java.util.List<javax.xml.crypto.XMLStructure>, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string)
    public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
    public getContent(): java.util.List
    public getId(): string
    public getMimeType(): string
    public getEncoding(): string
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