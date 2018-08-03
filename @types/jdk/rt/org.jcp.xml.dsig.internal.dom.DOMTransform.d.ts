declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
                        class DOMTransform extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.Transform {
                            protected spi: javax.xml.crypto.dsig.TransformService
                            public constructor(arg0: javax.xml.crypto.dsig.TransformService)
                            public constructor(arg0: org.w3c.dom.Element, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.security.Provider)
                            public getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                            public getAlgorithm(): string
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                            public transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.io.OutputStream): javax.xml.crypto.Data
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