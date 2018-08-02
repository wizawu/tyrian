declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
                        class DOMXMLSignature$DOMSignatureValue extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.XMLSignature$SignatureValue {
                            public getId(): string
                            public getValue(): byte[]
                            public validate(arg0: javax.xml.crypto.dsig.XMLValidateContext): boolean
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}