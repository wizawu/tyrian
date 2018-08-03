declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace txw2 {
                    namespace output {
                        class DataWriter extends com.sun.xml.internal.txw2.output.XMLWriter {
                            public constructor(arg0: java.io.Writer, arg1: java.lang.String | string, arg2: com.sun.xml.internal.txw2.output.CharacterEscapeHandler | com.sun.xml.internal.txw2.output.CharacterEscapeHandler$$Lambda)
                            public constructor(arg0: java.io.Writer, arg1: java.lang.String | string)
                            public constructor(arg0: java.io.Writer)
                            public getIndentStep(): int
                            public setIndentStep(arg0: int): void
                            public setIndentStep(arg0: java.lang.String | string): void
                            public reset(): void
                            public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                            public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public characters(arg0: char[], arg1: int, arg2: int): void
                            public comment(arg0: char[], arg1: int, arg2: int): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}