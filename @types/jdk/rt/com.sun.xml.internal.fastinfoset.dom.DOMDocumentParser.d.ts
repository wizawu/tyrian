declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace dom {
                        class DOMDocumentParser extends com.sun.xml.internal.fastinfoset.Decoder {
                            protected _document: org.w3c.dom.Document
                            protected _currentNode: org.w3c.dom.Node
                            protected _currentElement: org.w3c.dom.Element
                            protected _namespaceAttributes: org.w3c.dom.Attr[]
                            protected _namespaceAttributesIndex: int
                            protected _namespacePrefixes: int[]
                            protected _namespacePrefixesIndex: int
                            public constructor()
                            public parse(arg0: org.w3c.dom.Document, arg1: java.io.InputStream | java.io.InputStream$$Lambda): void
                            protected parse(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
                            protected resetOnError(): void
                            protected parse(): void
                            protected processDII(): void
                            protected processDIIOptionalProperties(): void
                            protected processEII(arg0: com.sun.xml.internal.fastinfoset.QualifiedName, arg1: boolean): void
                            protected processEIIWithNamespaces(): void
                            protected processLiteralQualifiedName(arg0: int, arg1: com.sun.xml.internal.fastinfoset.QualifiedName): com.sun.xml.internal.fastinfoset.QualifiedName
                            protected processLiteralQualifiedName(arg0: int): com.sun.xml.internal.fastinfoset.QualifiedName
                            protected processAIIs(): void
                            protected processCommentII(): void
                            protected processProcessingII(): void
                            protected createElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Element
                            protected createAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Attr
                            protected convertEncodingAlgorithmDataToCharacters(arg0: boolean): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}