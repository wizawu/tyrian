declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
interface NotationDeclaration extends javax.xml.stream.events.XMLEvent {
    getName(): string
    getPublicId(): string
    getSystemId(): string
}

            }
        }
    }
}