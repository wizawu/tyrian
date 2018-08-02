declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
interface EntityDeclaration extends javax.xml.stream.events.XMLEvent {
    getPublicId(): string
    getSystemId(): string
    getName(): string
    getNotationName(): string
    getReplacementText(): string
    getBaseURI(): string
}

            }
        }
    }
}