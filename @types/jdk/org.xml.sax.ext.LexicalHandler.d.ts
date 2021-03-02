declare namespace org {
  namespace xml {
    namespace sax {
      namespace ext {

        interface LexicalHandler {
          startDTD(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): void
          endDTD(): void
          startEntity(arg0: java.lang.String): void
          endEntity(arg0: java.lang.String): void
          startCDATA(): void
          endCDATA(): void
          comment(arg0: char[], arg1: int, arg2: int): void
        }

      }
    }
  }
}
