declare namespace jdk {
    namespace internal {
        namespace util {
            namespace xml {
                namespace impl {
                    class XMLStreamWriterImpl implements jdk.internal.util.xml.XMLStreamWriter {
                        public static readonly CLOSE_START_TAG: char
                        public static readonly OPEN_START_TAG: char
                        public static readonly OPEN_END_TAG: string
                        public static readonly CLOSE_END_TAG: char
                        public static readonly START_CDATA: string
                        public static readonly END_CDATA: string
                        public static readonly CLOSE_EMPTY_ELEMENT: string
                        public static readonly ENCODING_PREFIX: string
                        public static readonly SPACE: char
                        public static readonly AMPERSAND: char
                        public static readonly DOUBLEQUOT: char
                        public static readonly SEMICOLON: char
                        public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
                        public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string)
                        public writeStartDocument(): void
                        public writeStartDocument(arg0: java.lang.String | string): void
                        public writeStartDocument(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public writeStartDocument(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                        public writeDTD(arg0: java.lang.String | string): void
                        public writeStartElement(arg0: java.lang.String | string): void
                        public writeEmptyElement(arg0: java.lang.String | string): void
                        public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public writeEndDocument(): void
                        public writeEndElement(): void
                        public writeCData(arg0: java.lang.String | string): void
                        public writeCharacters(arg0: java.lang.String | string): void
                        public writeCharacters(arg0: char[], arg1: int, arg2: int): void
                        public close(): void
                        public flush(): void
                        public setDoIndent(arg0: boolean): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}