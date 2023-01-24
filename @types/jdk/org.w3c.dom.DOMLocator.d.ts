declare namespace org {
  namespace w3c {
    namespace dom {
      interface DOMLocator {
        getLineNumber(): number
        getColumnNumber(): number
        getByteOffset(): number
        getUtf16Offset(): number
        getRelatedNode(): org.w3c.dom.Node
        getUri(): java.lang.String
      }
    }
  }
}
