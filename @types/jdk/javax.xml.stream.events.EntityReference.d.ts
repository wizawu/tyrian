declare namespace javax {
  namespace xml {
    namespace stream {
      namespace events {
        interface EntityReference extends javax.xml.stream.events.XMLEvent {
          getDeclaration(): javax.xml.stream.events.EntityDeclaration
          getName(): java.lang.String
        }
      }
    }
  }
}
