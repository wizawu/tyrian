declare namespace javax {
  namespace xml {
    namespace stream {
      namespace events {
        interface StartElement extends javax.xml.stream.events.XMLEvent {
          getName(): javax.xml.namespace.QName
          getAttributes(): java.util.Iterator<javax.xml.stream.events.Attribute>
          getNamespaces(): java.util.Iterator<javax.xml.stream.events.Namespace>
          getAttributeByName(arg0: javax.xml.namespace.QName): javax.xml.stream.events.Attribute
          getNamespaceContext(): javax.xml.namespace.NamespaceContext
          getNamespaceURI(arg0: java.lang.String | string): java.lang.String
        }
      }
    }
  }
}
