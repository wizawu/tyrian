declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
                        class DOMCanonicalizationMethod extends org.jcp.xml.dsig.internal.dom.DOMTransform implements javax.xml.crypto.dsig.CanonicalizationMethod {
                            public constructor(arg0: javax.xml.crypto.dsig.TransformService)
                            public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
                            public canonicalize(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                            public canonicalize(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda): javax.xml.crypto.Data
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