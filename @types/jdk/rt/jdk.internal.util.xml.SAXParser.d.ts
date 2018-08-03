declare namespace jdk {
    namespace internal {
        namespace util {
            namespace xml {
                abstract class SAXParser {
                    protected constructor()
                    public parse(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: jdk.internal.org.xml.sax.helpers.DefaultHandler): void
                    public parse(arg0: java.lang.String | string, arg1: jdk.internal.org.xml.sax.helpers.DefaultHandler): void
                    public parse(arg0: java.io.File, arg1: jdk.internal.org.xml.sax.helpers.DefaultHandler): void
                    public parse(arg0: jdk.internal.org.xml.sax.InputSource, arg1: jdk.internal.org.xml.sax.helpers.DefaultHandler): void
                    public abstract getXMLReader(): jdk.internal.org.xml.sax.XMLReader
                    public abstract isNamespaceAware(): boolean
                    public abstract isValidating(): boolean
                    public isXIncludeAware(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}