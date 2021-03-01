declare namespace org {
  namespace xml {
    namespace sax {
      namespace helpers {

        class XMLReaderAdapter implements org.xml.sax.Parser, org.xml.sax.ContentHandler {

          xmlReader: org.xml.sax.XMLReader
          documentHandler: org.xml.sax.DocumentHandler
          qAtts: org.xml.sax.helpers.XMLReaderAdapter$AttributesAdapter
          public constructor()
          public constructor(arg0: org.xml.sax.XMLReader)
          public setLocale(arg0: java.util.Locale): void
          public setEntityResolver(arg0: org.xml.sax.EntityResolver): void
          public setDTDHandler(arg0: org.xml.sax.DTDHandler): void
          public setDocumentHandler(arg0: org.xml.sax.DocumentHandler): void
          public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
          public parse(arg0: java.lang.String): void
          public parse(arg0: org.xml.sax.InputSource): void
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
        }

      }
    }
  }
}
