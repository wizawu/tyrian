declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace txw2 {
                    namespace output {
                        class IndentingXMLFilter extends org.xml.sax.helpers.XMLFilterImpl implements org.xml.sax.ext.LexicalHandler {
                            public constructor()
                            public constructor(arg0: org.xml.sax.ContentHandler)
                            public constructor(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ext.LexicalHandler)
                            public getLexicalHandler(): org.xml.sax.ext.LexicalHandler
                            public setLexicalHandler(arg0: org.xml.sax.ext.LexicalHandler): void
                            public getIndentStep(): int
                            public setIndentStep(arg0: int): void
                            public setIndentStep(arg0: java.lang.String | string): void
                            public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                            public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public characters(arg0: char[], arg1: int, arg2: int): void
                            public comment(arg0: char[], arg1: int, arg2: int): void
                            public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public endDTD(): void
                            public startEntity(arg0: java.lang.String | string): void
                            public endEntity(arg0: java.lang.String | string): void
                            public startCDATA(): void
                            public endCDATA(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}