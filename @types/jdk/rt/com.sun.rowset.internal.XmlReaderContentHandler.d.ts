declare namespace com {
    namespace sun {
        namespace rowset {
            namespace internal {
class XmlReaderContentHandler extends org.xml.sax.helpers.DefaultHandler {
    public constructor(arg0: javax.sql.RowSet)
    public startDocument(): void
    public endDocument(): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public error(arg0: org.xml.sax.SAXParseException): void
    public warning(arg0: org.xml.sax.SAXParseException): void
    public notationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public unparsedEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}