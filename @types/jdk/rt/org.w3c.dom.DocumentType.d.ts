declare namespace org {
    namespace w3c {
        namespace dom {
interface DocumentType extends org.w3c.dom.Node {
    getName(): string
    getEntities(): org.w3c.dom.NamedNodeMap
    getNotations(): org.w3c.dom.NamedNodeMap
    getPublicId(): string
    getSystemId(): string
    getInternalSubset(): string
}

        }
    }
}