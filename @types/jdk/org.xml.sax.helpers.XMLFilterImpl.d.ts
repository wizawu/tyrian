declare namespace org {
  namespace xml {
    namespace sax {
      namespace helpers {

        class XMLFilterImpl implements org.xml.sax.XMLFilter, org.xml.sax.EntityResolver, org.xml.sax.DTDHandler, org.xml.sax.ContentHandler, org.xml.sax.ErrorHandler {

          public constructor()
          public constructor(arg0: org.xml.sax.XMLReader)
          public setParent(arg0: org.xml.sax.XMLReader): void
          public getParent(): org.xml.sax.XMLReader
          public setFeature(arg0: java.lang.String, arg1: boolean): void
          public getFeature(arg0: java.lang.String): boolean
          public setProperty(arg0: java.lang.String, arg1: java.lang.Object): void
          public getProperty(arg0: java.lang.String): java.lang.Object
          public setEntityResolver(arg0: org.xml.sax.EntityResolver): void
          public getEntityResolver(): org.xml.sax.EntityResolver
          public setDTDHandler(arg0: org.xml.sax.DTDHandler): void
          public getDTDHandler(): org.xml.sax.DTDHandler
          public setContentHandler(arg0: org.xml.sax.ContentHandler): void
          public getContentHandler(): org.xml.sax.ContentHandler
          public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
          public getErrorHandler(): org.xml.sax.ErrorHandler
          public parse(arg0: org.xml.sax.InputSource): void
          public parse(arg0: java.lang.String): void
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
