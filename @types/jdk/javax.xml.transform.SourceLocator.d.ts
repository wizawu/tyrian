declare namespace javax {
  namespace xml {
    namespace transform {

      interface SourceLocator {
        getPublicId(): java.lang.String
        getSystemId(): java.lang.String
        getLineNumber(): int
        getColumnNumber(): int
      }

    }
  }
}
