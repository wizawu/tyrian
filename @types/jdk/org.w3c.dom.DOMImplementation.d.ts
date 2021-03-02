declare namespace org {
  namespace w3c {
    namespace dom {

      interface DOMImplementation {
        hasFeature(arg0: java.lang.String, arg1: java.lang.String): boolean
        createDocumentType(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): org.w3c.dom.DocumentType
        createDocument(arg0: java.lang.String, arg1: java.lang.String, arg2: org.w3c.dom.DocumentType): org.w3c.dom.Document
        getFeature(arg0: java.lang.String, arg1: java.lang.String): java.lang.Object
      }

    }
  }
}
