declare namespace javax {
  namespace xml {
    namespace stream {
      namespace events {
        interface EndElement extends javax.xml.stream.events.XMLEvent {
          getName(): javax.xml.namespace.QName
          getNamespaces(): java.util.Iterator<javax.xml.stream.events.Namespace>
        }
      }
    }
  }
}
