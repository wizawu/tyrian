declare namespace jdk {
    namespace internal {
        namespace util {
            namespace xml {
                abstract class SAXParser {
                    protected constructor()
                    public parse(arg0: java.io.InputStream, arg1: jdk.internal.org.xml.sax.helpers.DefaultHandler): void
                    public parse(arg0: java.lang.String | string, arg1: jdk.internal.org.xml.sax.helpers.DefaultHandler): void
                    public parse(arg0: java.io.File, arg1: jdk.internal.org.xml.sax.helpers.DefaultHandler): void
                    public parse(arg0: jdk.internal.org.xml.sax.InputSource, arg1: jdk.internal.org.xml.sax.helpers.DefaultHandler): void
                    public getXMLReader(): jdk.internal.org.xml.sax.XMLReader
                    public isNamespaceAware(): boolean
                    public isValidating(): boolean
                    public isXIncludeAware(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}