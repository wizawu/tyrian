declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace txw2 {
                    namespace output {
                        class XMLWriter extends org.xml.sax.helpers.XMLFilterImpl implements org.xml.sax.ext.LexicalHandler {
                            public constructor(arg0: java.io.Writer, arg1: java.lang.String | string, arg2: com.sun.xml.internal.txw2.output.CharacterEscapeHandler | com.sun.xml.internal.txw2.output.CharacterEscapeHandler$$Lambda)
                            public constructor(arg0: java.io.Writer, arg1: java.lang.String | string)
                            public reset(): void
                            public flush(): void
                            public setOutput(arg0: java.io.Writer, arg1: java.lang.String | string): void
                            public setEncoding(arg0: java.lang.String | string): void
                            public setXmlDecl(arg0: boolean): void
                            public setHeader(arg0: java.lang.String | string): void
                            public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public startDocument(): void
                            public endDocument(): void
                            public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                            public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public characters(arg0: char[], arg1: int, arg2: int): void
                            public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                            public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public startElement(arg0: java.lang.String | string): void
                            public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public endElement(arg0: java.lang.String | string): void
                            public dataElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes, arg4: java.lang.String | string): void
                            public dataElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public dataElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public characters(arg0: java.lang.String | string): void
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