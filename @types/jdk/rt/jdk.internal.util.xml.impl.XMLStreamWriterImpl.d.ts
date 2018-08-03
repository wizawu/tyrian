declare namespace jdk {
    namespace internal {
        namespace util {
            namespace xml {
                namespace impl {
                    class XMLStreamWriterImpl implements jdk.internal.util.xml.XMLStreamWriter {
                        public static CLOSE_START_TAG: char
                        public static OPEN_START_TAG: char
                        public static OPEN_END_TAG: string
                        public static CLOSE_END_TAG: char
                        public static START_CDATA: string
                        public static END_CDATA: string
                        public static CLOSE_EMPTY_ELEMENT: string
                        public static ENCODING_PREFIX: string
                        public static SPACE: char
                        public static AMPERSAND: char
                        public static DOUBLEQUOT: char
                        public static SEMICOLON: char
                        public constructor(arg0: java.io.OutputStream)
                        public constructor(arg0: java.io.OutputStream, arg1: java.lang.String | string)
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