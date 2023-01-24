declare namespace javax {
  namespace xml {
    namespace stream {
      namespace events {
        interface NotationDeclaration extends javax.xml.stream.events.XMLEvent {
          getName(): java.lang.String
          getPublicId(): java.lang.String
          getSystemId(): java.lang.String
        }
      }
    }
  }
}
