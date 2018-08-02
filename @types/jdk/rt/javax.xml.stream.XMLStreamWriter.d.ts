declare namespace javax {
    namespace xml {
        namespace stream {
            interface XMLStreamWriter {
                writeStartElement(arg0: java.lang.String | string): void
                writeStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                writeStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                writeEmptyElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                writeEmptyElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                writeEmptyElement(arg0: java.lang.String | string): void
                writeEndElement(): void
                writeEndDocument(): void
                close(): void
                flush(): void
                writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                writeNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                writeDefaultNamespace(arg0: java.lang.String | string): void
                writeComment(arg0: java.lang.String | string): void
                writeProcessingInstruction(arg0: java.lang.String | string): void
                writeProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                writeCData(arg0: java.lang.String | string): void
                writeDTD(arg0: java.lang.String | string): void
                writeEntityRef(arg0: java.lang.String | string): void
                writeStartDocument(): void
                writeStartDocument(arg0: java.lang.String | string): void
                writeStartDocument(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                writeCharacters(arg0: java.lang.String | string): void
                writeCharacters(arg0: char[], arg1: int, arg2: int): void
                getPrefix(arg0: java.lang.String | string): string
                setPrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                setDefaultNamespace(arg0: java.lang.String | string): void
                setNamespaceContext(arg0: javax.xml.namespace.NamespaceContext): void
                getNamespaceContext(): javax.xml.namespace.NamespaceContext
                getProperty(arg0: java.lang.String | string): java.lang.Object
            }
        }
    }
}