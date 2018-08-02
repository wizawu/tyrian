declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace txw2 {
                    namespace output {
class IndentingXMLStreamWriter extends com.sun.xml.internal.txw2.output.DelegatingXMLStreamWriter {
    public constructor(arg0: javax.xml.stream.XMLStreamWriter)
    public getIndentStep(): int
    public setIndentStep(arg0: int): void
    public setIndentStep(arg0: java.lang.String | string): void
    public writeStartDocument(): void
    public writeStartDocument(arg0: java.lang.String | string): void
    public writeStartDocument(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public writeStartElement(arg0: java.lang.String | string): void
    public writeStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public writeStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public writeEmptyElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public writeEmptyElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public writeEmptyElement(arg0: java.lang.String | string): void
    public writeEndElement(): void
    public writeCharacters(arg0: java.lang.String | string): void
    public writeCharacters(arg0: char[], arg1: int, arg2: int): void
    public writeCData(arg0: java.lang.String | string): void
    public getProperty(arg0: java.lang.String | string): java.lang.Object
    public getNamespaceContext(): javax.xml.namespace.NamespaceContext
    public setNamespaceContext(arg0: javax.xml.namespace.NamespaceContext): void
    public setDefaultNamespace(arg0: java.lang.String | string): void
    public setPrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public getPrefix(arg0: java.lang.String | string): string
    public writeEntityRef(arg0: java.lang.String | string): void
    public writeDTD(arg0: java.lang.String | string): void
    public writeProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public writeProcessingInstruction(arg0: java.lang.String | string): void
    public writeComment(arg0: java.lang.String | string): void
    public writeDefaultNamespace(arg0: java.lang.String | string): void
    public writeNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public flush(): void
    public close(): void
    public writeEndDocument(): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}