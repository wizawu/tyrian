declare namespace jdk {
    namespace internal {
        namespace util {
            namespace xml {
class PropertiesDefaultHandler extends jdk.internal.org.xml.sax.helpers.DefaultHandler {
    public constructor()
    public load(arg0: java.util.Properties, arg1: java.io.InputStream): void
    public store(arg0: java.util.Properties, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: jdk.internal.org.xml.sax.Attributes): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public notationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): jdk.internal.org.xml.sax.InputSource
    public error(arg0: jdk.internal.org.xml.sax.SAXParseException): void
    public fatalError(arg0: jdk.internal.org.xml.sax.SAXParseException): void
    public warning(arg0: jdk.internal.org.xml.sax.SAXParseException): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}