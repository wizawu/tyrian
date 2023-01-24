declare namespace org {
  namespace xml {
    namespace sax {
      interface DocumentHandler {
        setDocumentLocator(arg0: org.xml.sax.Locator): void
        startDocument(): void
        endDocument(): void
        startElement(arg0: java.lang.String | string, arg1: org.xml.sax.AttributeList): void
        endElement(arg0: java.lang.String | string): void
        characters(
          arg0: string[] | java.lang.Character[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        ignorableWhitespace(
          arg0: string[] | java.lang.Character[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      }
    }
  }
}
