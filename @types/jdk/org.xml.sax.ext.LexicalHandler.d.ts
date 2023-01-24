declare namespace org {
  namespace xml {
    namespace sax {
      namespace ext {
        interface LexicalHandler {
          startDTD(
            arg0: java.lang.String | string,
            arg1: java.lang.String | string,
            arg2: java.lang.String | string
          ): void
          endDTD(): void
          startEntity(arg0: java.lang.String | string): void
          endEntity(arg0: java.lang.String | string): void
          startCDATA(): void
          endCDATA(): void
          comment(
            arg0: string[] | java.lang.Character[],
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): void
        }
      }
    }
  }
}
