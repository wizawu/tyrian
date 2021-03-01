declare namespace javax {
  namespace xml {
    namespace stream {
      namespace events {

        interface DTD extends javax.xml.stream.events.XMLEvent {

          getDocumentTypeDeclaration(): java.lang.String
          getProcessedDTD(): java.lang.Object
          getNotations(): java.util.List<javax.xml.stream.events.NotationDeclaration>
          getEntities(): java.util.List<javax.xml.stream.events.EntityDeclaration>
        }

      }
    }
  }
}
