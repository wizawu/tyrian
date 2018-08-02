declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace c14n {
                                namespace implementations {
abstract class Canonicalizer11 extends com.sun.org.apache.xml.internal.security.c14n.implementations.CanonicalizerBase {
    public constructor(arg0: boolean)
    public engineCanonicalizeXPathNodeSet(arg0: java.util.Set<org.w3c.dom.Node>, arg1: java.lang.String | string): byte[]
    public engineCanonicalizeSubTree(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): byte[]
    protected handleAttributesSubtree(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable): java.util.Iterator<org.w3c.dom.Attr>
    protected handleAttributes(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable): java.util.Iterator<org.w3c.dom.Attr>
    protected circumventBugIfNeeded(arg0: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput): void
    protected handleParent(arg0: org.w3c.dom.Element, arg1: com.sun.org.apache.xml.internal.security.c14n.implementations.NameSpaceSymbTable): void
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