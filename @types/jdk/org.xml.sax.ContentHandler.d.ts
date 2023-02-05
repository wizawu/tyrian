declare namespace org {
  namespace xml {
    namespace sax {
      interface ContentHandler {
        setDocumentLocator(arg0: org.xml.sax.Locator): void
        startDocument(): void
        endDocument(): void
        startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
        endPrefixMapping(arg0: java.lang.String | string): void
        startElement(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: org.xml.sax.Attributes
        ): void
        endElement(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string
        ): void
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
        skippedEntity(arg0: java.lang.String | string): void
      }
    }
  }
}
