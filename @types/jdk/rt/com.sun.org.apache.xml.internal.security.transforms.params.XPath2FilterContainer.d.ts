declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace transforms {
                                namespace params {
                                    class XPath2FilterContainer extends com.sun.org.apache.xml.internal.security.utils.ElementProxy implements com.sun.org.apache.xml.internal.security.transforms.TransformParam {
                                        public static readonly INTERSECT: string
                                        public static readonly SUBTRACT: string
                                        public static readonly UNION: string
                                        public static readonly _TAG_XPATH2: string
                                        public static readonly XPathFilter2NS: string
                                        public static newInstanceIntersect(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPath2FilterContainer
                                        public static newInstanceSubtract(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPath2FilterContainer
                                        public static newInstanceUnion(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPath2FilterContainer
                                        public static newInstances(arg0: org.w3c.dom.Document, arg1: java.lang.String[][]): org.w3c.dom.NodeList
                                        public static newInstance(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPath2FilterContainer
                                        public isIntersect(): boolean
                                        public isSubtract(): boolean
                                        public isUnion(): boolean
                                        public getXPathFilterStr(): string
                                        public getXPathFilterTextNode(): org.w3c.dom.Node
                                        public getBaseLocalName(): string
                                        public getBaseNamespace(): string
                                        public static class: java.lang.Class<any>
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}