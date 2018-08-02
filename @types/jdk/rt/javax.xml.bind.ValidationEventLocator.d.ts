declare namespace javax {
    namespace xml {
        namespace bind {
interface ValidationEventLocator {
    getURL(): java.net.URL
    getOffset(): int
    getLineNumber(): int
    getColumnNumber(): int
    getObject(): java.lang.Object
    getNode(): org.w3c.dom.Node
}

        }
    }
}