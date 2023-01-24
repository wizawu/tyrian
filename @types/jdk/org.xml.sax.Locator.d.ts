declare namespace org {
  namespace xml {
    namespace sax {
      interface Locator {
        getPublicId(): java.lang.String
        getSystemId(): java.lang.String
        getLineNumber(): number
        getColumnNumber(): number
      }
    }
  }
}
