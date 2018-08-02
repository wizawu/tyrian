declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
                interface Namespace extends javax.xml.stream.events.Attribute {
                    getPrefix(): string
                    getNamespaceURI(): string
                    isDefaultNamespaceDeclaration(): boolean
                }
            }
        }
    }
}