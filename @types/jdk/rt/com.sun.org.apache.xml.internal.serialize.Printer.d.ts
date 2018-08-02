declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serialize {
                            class Printer {
                                protected _format: com.sun.org.apache.xml.internal.serialize.OutputFormat
                                protected _writer: java.io.Writer
                                protected _dtdWriter: java.io.StringWriter
                                protected _docWriter: java.io.Writer
                                protected _exception: java.io.IOException
                                public constructor(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: com.sun.org.apache.xml.internal.serialize.OutputFormat)
                                public getException(): java.io.IOException
                                public enterDTD(): void
                                public leaveDTD(): string
                                public printText(arg0: java.lang.String | string): void
                                public printText(arg0: java.lang.StringBuffer): void
                                public printText(arg0: char[], arg1: int, arg2: int): void
                                public printText(arg0: char): void
                                public printSpace(): void
                                public breakLine(): void
                                public breakLine(arg0: boolean): void
                                public flushLine(arg0: boolean): void
                                public flush(): void
                                public indent(): void
                                public unindent(): void
                                public getNextIndent(): int
                                public setNextIndent(arg0: int): void
                                public setThisIndent(arg0: int): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}