declare namespace org {
  namespace w3c {
    namespace dom {

      interface Entity extends org.w3c.dom.Node {
        getPublicId(): java.lang.String
        getSystemId(): java.lang.String
        getNotationName(): java.lang.String
        getInputEncoding(): java.lang.String
        getXmlEncoding(): java.lang.String
        getXmlVersion(): java.lang.String
      }

    }
  }
}
