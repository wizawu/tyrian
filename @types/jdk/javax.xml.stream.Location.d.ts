declare namespace javax {
  namespace xml {
    namespace stream {

      interface Location {
        getLineNumber(): int
        getColumnNumber(): int
        getCharacterOffset(): int
        getPublicId(): java.lang.String
        getSystemId(): java.lang.String
      }

    }
  }
}
