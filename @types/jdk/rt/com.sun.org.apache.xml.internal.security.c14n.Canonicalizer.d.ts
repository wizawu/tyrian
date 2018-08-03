declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace c14n {
                                class Canonicalizer {
                                    public static readonly ENCODING: string
                                    public static readonly XPATH_C14N_WITH_COMMENTS_SINGLE_NODE: string
                                    public static readonly ALGO_ID_C14N_OMIT_COMMENTS: string
                                    public static readonly ALGO_ID_C14N_WITH_COMMENTS: string
                                    public static readonly ALGO_ID_C14N_EXCL_OMIT_COMMENTS: string
                                    public static readonly ALGO_ID_C14N_EXCL_WITH_COMMENTS: string
                                    public static readonly ALGO_ID_C14N11_OMIT_COMMENTS: string
                                    public static readonly ALGO_ID_C14N11_WITH_COMMENTS: string
                                    public static readonly ALGO_ID_C14N_PHYSICAL: string
                                    public static getInstance(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.security.c14n.Canonicalizer
                                    public static register(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public static register(arg0: java.lang.String | string, arg1: java.lang.Class<com.sun.org.apache.xml.internal.security.c14n.CanonicalizerSpi>): void
                                    public static registerDefaultAlgorithms(): void
                                    public getURI(): string
                                    public getIncludeComments(): boolean
                                    public canonicalize(arg0: byte[]): byte[]
                                    public canonicalizeSubtree(arg0: org.w3c.dom.Node): byte[]
                                    public canonicalizeSubtree(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): byte[]
                                    public canonicalizeXPathNodeSet(arg0: org.w3c.dom.NodeList): byte[]
                                    public canonicalizeXPathNodeSet(arg0: org.w3c.dom.NodeList, arg1: java.lang.String | string): byte[]
                                    public canonicalizeXPathNodeSet(arg0: java.util.Set<org.w3c.dom.Node>): byte[]
                                    public canonicalizeXPathNodeSet(arg0: java.util.Set<org.w3c.dom.Node>, arg1: java.lang.String | string): byte[]
                                    public setWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                    public getImplementingCanonicalizerClass(): string
                                    public notReset(): void
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