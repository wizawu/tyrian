declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
class DOMRetrievalMethod extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.keyinfo.RetrievalMethod , javax.xml.crypto.dom.DOMURIReference {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.List<javax.xml.crypto.dsig.Transform>)
    public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
    public getURI(): string
    public getType(): string
    public getTransforms(): java.util.List
    public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
    public getHere(): org.w3c.dom.Node
    public dereference(arg0: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
    public dereferenceAsXMLStructure(arg0: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.XMLStructure
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