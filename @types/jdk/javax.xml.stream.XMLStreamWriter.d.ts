declare namespace javax {
  namespace xml {
    namespace stream {

      interface XMLStreamWriter {
        writeStartElement(arg0: java.lang.String): void
        writeStartElement(arg0: java.lang.String, arg1: java.lang.String): void
        writeStartElement(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): void
        writeEmptyElement(arg0: java.lang.String, arg1: java.lang.String): void
        writeEmptyElement(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): void
        writeEmptyElement(arg0: java.lang.String): void
        writeEndElement(): void
        writeEndDocument(): void
        close(): void
        flush(): void
        writeAttribute(arg0: java.lang.String, arg1: java.lang.String): void
        writeAttribute(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String): void
        writeAttribute(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): void
        writeNamespace(arg0: java.lang.String, arg1: java.lang.String): void
        writeDefaultNamespace(arg0: java.lang.String): void
        writeComment(arg0: java.lang.String): void
        writeProcessingInstruction(arg0: java.lang.String): void
        writeProcessingInstruction(arg0: java.lang.String, arg1: java.lang.String): void
        writeCData(arg0: java.lang.String): void
        writeDTD(arg0: java.lang.String): void
        writeEntityRef(arg0: java.lang.String): void
        writeStartDocument(): void
        writeStartDocument(arg0: java.lang.String): void
        writeStartDocument(arg0: java.lang.String, arg1: java.lang.String): void
        writeCharacters(arg0: java.lang.String): void
        writeCharacters(arg0: char[], arg1: int, arg2: int): void
        getPrefix(arg0: java.lang.String): java.lang.String
        setPrefix(arg0: java.lang.String, arg1: java.lang.String): void
        setDefaultNamespace(arg0: java.lang.String): void
        setNamespaceContext(arg0: javax.xml.namespace.NamespaceContext): void
        getNamespaceContext(): javax.xml.namespace.NamespaceContext
        getProperty(arg0: java.lang.String): java.lang.Object
      }

    }
  }
}
