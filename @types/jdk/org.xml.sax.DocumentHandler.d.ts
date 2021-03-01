declare namespace org {
  namespace xml {
    namespace sax {

      interface DocumentHandler {

        setDocumentLocator(arg0: org.xml.sax.Locator): void
        startDocument(): void
        endDocument(): void
        startElement(arg0: java.lang.String, arg1: org.xml.sax.AttributeList): void
        endElement(arg0: java.lang.String): void
        characters(arg0: char[], arg1: int, arg2: int): void
        ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
        processingInstruction(arg0: java.lang.String, arg1: java.lang.String): void
      }

    }
  }
}
