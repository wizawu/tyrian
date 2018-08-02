declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
                        abstract class ApacheCanonicalizer extends javax.xml.crypto.dsig.TransformService {
                            protected apacheCanonicalizer: com.sun.org.apache.xml.internal.security.c14n.Canonicalizer
                            protected inclusiveNamespaces: string
                            protected params: javax.xml.crypto.dsig.spec.C14NMethodParameterSpec
                            protected ownerDoc: org.w3c.dom.Document
                            protected transformElem: org.w3c.dom.Element
                            public constructor()
                            public getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                            public init(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public marshalParams(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
                            public canonicalize(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                            public canonicalize(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda): javax.xml.crypto.Data
                            public transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda): javax.xml.crypto.Data
                            public isFeatureSupported(arg0: java.lang.String | string): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}