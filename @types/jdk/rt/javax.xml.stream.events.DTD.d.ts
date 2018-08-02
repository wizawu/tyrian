declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
interface DTD extends javax.xml.stream.events.XMLEvent {
    getDocumentTypeDeclaration(): string
    getProcessedDTD(): java.lang.Object
    getNotations(): java.util.List
    getEntities(): java.util.List
}

            }
        }
    }
}