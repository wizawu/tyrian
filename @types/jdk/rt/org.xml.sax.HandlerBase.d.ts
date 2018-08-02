declare namespace org {
    namespace xml {
        namespace sax {
class HandlerBase implements org.xml.sax.EntityResolver , org.xml.sax.DTDHandler , org.xml.sax.DocumentHandler , org.xml.sax.ErrorHandler {
    public constructor()
    public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
    public notationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public unparsedEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    public setDocumentLocator(arg0: org.xml.sax.Locator): void
    public startDocument(): void
    public endDocument(): void
    public startElement(arg0: java.lang.String | string, arg1: org.xml.sax.AttributeList): void
    public endElement(arg0: java.lang.String | string): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public warning(arg0: org.xml.sax.SAXParseException): void
    public error(arg0: org.xml.sax.SAXParseException): void
    public fatalError(arg0: org.xml.sax.SAXParseException): void
    public static class: java.lang.Class<any>
}

        }
    }
}