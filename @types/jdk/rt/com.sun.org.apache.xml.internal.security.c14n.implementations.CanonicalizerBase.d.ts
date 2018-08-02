declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace c14n {
                                namespace implementations {
                                    abstract class CanonicalizerBase extends com.sun.org.apache.xml.internal.security.c14n.CanonicalizerSpi {
                                        public static XML: string
                                        public static XMLNS: string
                                        protected static COMPARE: com.sun.org.apache.xml.internal.security.c14n.helper.AttrCompare
                                        protected static NODE_BEFORE_DOCUMENT_ELEMENT: int
                                        protected static NODE_NOT_BEFORE_OR_AFTER_DOCUMENT_ELEMENT: int
                                        protected static NODE_AFTER_DOCUMENT_ELEMENT: int
                                        public constructor(arg0: boolean)
                                        public engineCanonicalizeSubTree(arg0: org.w3c.dom.Node): byte[]
                                        public engineCanonicalizeXPathNodeSet(arg0: java.util.Set<org.w3c.dom.Node>): byte[]
                                        public engineCanonicalize(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput): byte[]
                                        public setWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                        protected engineCanonicalizeSubTree(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): byte[]
                                        protected canonicalizeSubTree(arg0: org.w3c.dom.Node, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable, arg2: org.w3c.dom.Node, arg3: int): void
                                        protected canonicalizeXPathNodeSet(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): void
                                        protected isVisibleDO(arg0: org.w3c.dom.Node, arg1: int): int
                                        protected isVisibleInt(arg0: org.w3c.dom.Node): int
                                        protected isVisible(arg0: org.w3c.dom.Node): boolean
                                        protected handleParent(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable): void
                                        protected getParentNameSpaces(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable): void
                                        protected static outputAttrToWriter(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda, arg3: java.util.Map<java.lang.String, byte[]>): void
                                        protected outputPItoWriter(arg0: org.w3c.dom.ProcessingInstruction, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: int): void
                                        protected outputCommentToWriter(arg0: org.w3c.dom.Comment, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: int): void
                                        protected static outputTextToWriter(arg0: java.lang.String | string, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                        protected getNullNode(arg0: org.w3c.dom.Document): org.w3c.dom.Attr
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