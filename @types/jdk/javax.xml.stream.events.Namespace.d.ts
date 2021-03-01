declare namespace javax {
  namespace xml {
    namespace stream {
      namespace events {

        interface Namespace extends javax.xml.stream.events.Attribute {

          getPrefix(): java.lang.String
          getNamespaceURI(): java.lang.String
          isDefaultNamespaceDeclaration(): boolean
        }

      }
    }
  }
}
