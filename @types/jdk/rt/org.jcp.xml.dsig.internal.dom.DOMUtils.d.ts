declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
                        class DOMUtils {
                            public static getOwnerDocument(arg0: org.w3c.dom.Node): org.w3c.dom.Document
                            public static createElement(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): org.w3c.dom.Element
                            public static setAttribute(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public static setAttributeID(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public static getFirstChildElement(arg0: org.w3c.dom.Node): org.w3c.dom.Element
                            public static getFirstChildElement(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): org.w3c.dom.Element
                            public static getLastChildElement(arg0: org.w3c.dom.Node): org.w3c.dom.Element
                            public static getNextSiblingElement(arg0: org.w3c.dom.Node): org.w3c.dom.Element
                            public static getNextSiblingElement(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): org.w3c.dom.Element
                            public static getAttributeValue(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): string
                            public static nodeSet(arg0: org.w3c.dom.NodeList): java.util.Set<org.w3c.dom.Node>
                            public static getNSPrefix(arg0: javax.xml.crypto.XMLCryptoContext, arg1: java.lang.String | string): string
                            public static getSignaturePrefix(arg0: javax.xml.crypto.XMLCryptoContext): string
                            public static removeAllChildren(arg0: org.w3c.dom.Node): void
                            public static nodesEqual(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): boolean
                            public static appendChild(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): void
                            public static paramsEqual(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.spec.AlgorithmParameterSpec): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}