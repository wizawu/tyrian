declare namespace javax {
  namespace xml {
    namespace stream {
      namespace events {

        interface EntityDeclaration extends javax.xml.stream.events.XMLEvent {

          getPublicId(): java.lang.String
          getSystemId(): java.lang.String
          getName(): java.lang.String
          getNotationName(): java.lang.String
          getReplacementText(): java.lang.String
          getBaseURI(): java.lang.String
        }

      }
    }
  }
}
