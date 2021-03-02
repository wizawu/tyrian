declare namespace org {
  namespace w3c {
    namespace dom {

      interface DOMLocator {
        getLineNumber(): int
        getColumnNumber(): int
        getByteOffset(): int
        getUtf16Offset(): int
        getRelatedNode(): org.w3c.dom.Node
        getUri(): java.lang.String
      }

    }
  }
}
