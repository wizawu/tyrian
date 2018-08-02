declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
                        class DOMExcC14NMethod extends org.jcp.xml.dsig.internal.dom.ApacheCanonicalizer {
                            public constructor()
                            public init(arg0: javax.xml.crypto.dsig.spec.TransformParameterSpec): void
                            public init(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public marshalParams(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public getParamsNSURI(): string
                            public transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}