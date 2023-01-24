declare namespace org {
  namespace w3c {
    namespace dom {
      interface DocumentType extends org.w3c.dom.Node {
        getName(): java.lang.String
        getEntities(): org.w3c.dom.NamedNodeMap
        getNotations(): org.w3c.dom.NamedNodeMap
        getPublicId(): java.lang.String
        getSystemId(): java.lang.String
        getInternalSubset(): java.lang.String
      }
    }
  }
}
