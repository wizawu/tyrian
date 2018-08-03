declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace tools {
                        class SAXEventSerializer extends org.xml.sax.helpers.DefaultHandler implements org.xml.sax.ext.LexicalHandler {
                            protected _namespaceAttributes: java.util.List
                            public constructor(arg0: java.io.OutputStream)
                            public startDocument(): void
                            public endDocument(): void
                            public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public endPrefixMapping(arg0: java.lang.String | string): void
                            public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                            public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public characters(arg0: char[], arg1: int, arg2: int): void
                            public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                            public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public endDTD(): void
                            public startEntity(arg0: java.lang.String | string): void
                            public endEntity(arg0: java.lang.String | string): void
                            public startCDATA(): void
                            public endCDATA(): void
                            public comment(arg0: char[], arg1: int, arg2: int): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}