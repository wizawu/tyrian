declare namespace org {
  namespace xml {
    namespace sax {
      namespace helpers {

        class DefaultHandler implements org.xml.sax.EntityResolver, org.xml.sax.DTDHandler, org.xml.sax.ContentHandler, org.xml.sax.ErrorHandler {
          public constructor()
          public resolveEntity(arg0: java.lang.String, arg1: java.lang.String): org.xml.sax.InputSource
          public notationDecl(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): void
          public unparsedEntityDecl(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String): void
          public setDocumentLocator(arg0: org.xml.sax.Locator): void
          public startDocument(): void
          public endDocument(): void
          public startPrefixMapping(arg0: java.lang.String, arg1: java.lang.String): void
          public endPrefixMapping(arg0: java.lang.String): void
          public startElement(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: org.xml.sax.Attributes): void
          public endElement(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): void
          public characters(arg0: char[], arg1: int, arg2: int): void
          public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
          public processingInstruction(arg0: java.lang.String, arg1: java.lang.String): void
          public skippedEntity(arg0: java.lang.String): void
          public warning(arg0: org.xml.sax.SAXParseException): void
          public error(arg0: org.xml.sax.SAXParseException): void
          public fatalError(arg0: org.xml.sax.SAXParseException): void
        }

      }
    }
  }
}
