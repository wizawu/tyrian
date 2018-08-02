declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
class SynthParser extends org.xml.sax.helpers.DefaultHandler {
    public parse(arg0: java.io.InputStream, arg1: javax.swing.plaf.synth.DefaultSynthStyleFactory, arg2: java.net.URL, arg3: java.lang.Class<any>, arg4: java.util.Map<java.lang.String, java.lang.Object>): void
    public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
    public notationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public unparsedEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    public setDocumentLocator(arg0: org.xml.sax.Locator): void
    public startDocument(): void
    public endDocument(): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
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
}