declare namespace javax {
    namespace xml {
        namespace stream {
interface XMLEventWriter extends javax.xml.stream.util.XMLEventConsumer {
    flush(): void
    close(): void
    add(arg0: javax.xml.stream.events.XMLEvent): void
    add(arg0: javax.xml.stream.XMLEventReader): void
    getPrefix(arg0: java.lang.String | string): string
    setPrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    setDefaultNamespace(arg0: java.lang.String | string): void
    setNamespaceContext(arg0: javax.xml.namespace.NamespaceContext): void
    getNamespaceContext(): javax.xml.namespace.NamespaceContext
}

        }
    }
}