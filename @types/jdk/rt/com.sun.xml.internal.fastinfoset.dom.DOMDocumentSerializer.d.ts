declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace dom {
                        class DOMDocumentSerializer extends com.sun.xml.internal.fastinfoset.Encoder {
                            protected _namespaceScopeContext: com.sun.xml.internal.fastinfoset.util.NamespaceContextImplementation
                            protected _attributes: org.w3c.dom.Node[]
                            public constructor()
                            public serialize(arg0: org.w3c.dom.Node): void
                            public serialize(arg0: org.w3c.dom.Document): void
                            protected serializeElementAsDocument(arg0: org.w3c.dom.Node): void
                            protected serializeElement(arg0: org.w3c.dom.Node): void
                            protected serializeText(arg0: org.w3c.dom.Node): void
                            protected serializeCDATA(arg0: org.w3c.dom.Node): void
                            protected serializeComment(arg0: org.w3c.dom.Node): void
                            protected serializeProcessingInstruction(arg0: org.w3c.dom.Node): void
                            protected encodeElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            protected encodeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}