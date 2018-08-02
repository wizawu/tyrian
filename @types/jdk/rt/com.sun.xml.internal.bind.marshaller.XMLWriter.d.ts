declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace marshaller {
                        class XMLWriter extends org.xml.sax.helpers.XMLFilterImpl {
                            public constructor(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.bind.marshaller.CharacterEscapeHandler | com.sun.xml.internal.bind.marshaller.CharacterEscapeHandler$$Lambda)
                            public constructor(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: java.lang.String | string)
                            public reset(): void
                            public flush(): void
                            public setOutput(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: java.lang.String | string): void
                            public setXmlDecl(arg0: boolean): void
                            public setHeader(arg0: java.lang.String | string): void
                            public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public startDocument(): void
                            protected writeXmlDecl(arg0: java.lang.String | string): void
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
                            protected write(arg0: char): void
                            protected write(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}