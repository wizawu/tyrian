declare namespace javax {
  namespace xml {
    namespace stream {

      interface Location {
        getLineNumber(): number
        getColumnNumber(): number
        getCharacterOffset(): number
        getPublicId(): java.lang.String
        getSystemId(): java.lang.String
      }

    }
  }
}
