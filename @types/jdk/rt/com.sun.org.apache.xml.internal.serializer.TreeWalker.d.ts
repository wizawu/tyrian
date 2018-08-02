declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
                            class TreeWalker {
                                public getContentHandler(): org.xml.sax.ContentHandler
                                public constructor(arg0: org.xml.sax.ContentHandler)
                                public constructor(arg0: org.xml.sax.ContentHandler, arg1: java.lang.String | string)
                                public traverse(arg0: org.w3c.dom.Node): void
                                public traverse(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): void
                                protected startNode(arg0: org.w3c.dom.Node): void
                                protected endNode(arg0: org.w3c.dom.Node): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}