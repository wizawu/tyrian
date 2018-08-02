declare namespace jdk {
    namespace internal {
        namespace util {
            namespace xml {
                interface XMLStreamWriter {
                    DEFAULT_XML_VERSION: string
                    DEFAULT_ENCODING: string
                    writeStartElement(arg0: java.lang.String | string): void
                    writeEmptyElement(arg0: java.lang.String | string): void
                    writeEndElement(): void
                    writeEndDocument(): void
                    close(): void
                    flush(): void
                    writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                    writeCData(arg0: java.lang.String | string): void
                    writeDTD(arg0: java.lang.String | string): void
                    writeStartDocument(): void
                    writeStartDocument(arg0: java.lang.String | string): void
                    writeStartDocument(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                    writeCharacters(arg0: java.lang.String | string): void
                    writeCharacters(arg0: char[], arg1: int, arg2: int): void
                }
            }
        }
    }
}