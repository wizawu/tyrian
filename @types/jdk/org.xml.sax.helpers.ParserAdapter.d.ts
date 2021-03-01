declare namespace org {
  namespace xml {
    namespace sax {
      namespace helpers {

        class ParserAdapter implements org.xml.sax.XMLReader, org.xml.sax.DocumentHandler {

          locator: org.xml.sax.Locator
          entityResolver: org.xml.sax.EntityResolver
          dtdHandler: org.xml.sax.DTDHandler
          contentHandler: org.xml.sax.ContentHandler
          errorHandler: org.xml.sax.ErrorHandler
          public constructor()
          public constructor(arg0: org.xml.sax.Parser)
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
          public parse(arg0: java.lang.String): void
          public parse(arg0: org.xml.sax.InputSource): void
          public setDocumentLocator(arg0: org.xml.sax.Locator): void
          public startDocument(): void
          public endDocument(): void
          public startElement(arg0: java.lang.String, arg1: org.xml.sax.AttributeList): void
          public endElement(arg0: java.lang.String): void
          public characters(arg0: char[], arg1: int, arg2: int): void
          public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
          public processingInstruction(arg0: java.lang.String, arg1: java.lang.String): void
          reportError(arg0: java.lang.String): void
        }

      }
    }
  }
}
