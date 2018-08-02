declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
class DOMManifest extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.Manifest {
    public constructor(arg0: java.util.List<javax.xml.crypto.dsig.Reference>, arg1: java.lang.String | string)
    public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
    public getId(): string
    public getReferences(): java.util.List
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