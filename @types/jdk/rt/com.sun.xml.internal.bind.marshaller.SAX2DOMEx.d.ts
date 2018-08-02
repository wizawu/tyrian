declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace marshaller {
                        class SAX2DOMEx implements org.xml.sax.ContentHandler {
                            protected nodeStack: java.util.Stack<org.w3c.dom.Node>
                            protected document: org.w3c.dom.Document
                            public constructor(arg0: org.w3c.dom.Node)
                            public constructor(arg0: org.w3c.dom.Node, arg1: boolean)
                            public constructor(arg0: javax.xml.parsers.DocumentBuilderFactory)
                            public constructor()
                            public getCurrentElement(): org.w3c.dom.Element
                            public getDOM(): org.w3c.dom.Node
                            public startDocument(): void
                            public endDocument(): void
                            protected namespace(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                            public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public characters(arg0: char[], arg1: int, arg2: int): void
                            protected characters(arg0: java.lang.String | string): org.w3c.dom.Text
                            public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                            public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public setDocumentLocator(arg0: org.xml.sax.Locator): void
                            public skippedEntity(arg0: java.lang.String | string): void
                            public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public endPrefixMapping(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}