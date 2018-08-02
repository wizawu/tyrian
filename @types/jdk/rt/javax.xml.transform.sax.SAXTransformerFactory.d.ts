declare namespace javax {
    namespace xml {
        namespace transform {
            namespace sax {
                abstract class SAXTransformerFactory extends javax.xml.transform.TransformerFactory {
                    public static FEATURE: string
                    public static FEATURE_XMLFILTER: string
                    protected constructor()
                    public newTransformerHandler(arg0: javax.xml.transform.Source): javax.xml.transform.sax.TransformerHandler
                    public newTransformerHandler(arg0: javax.xml.transform.Templates): javax.xml.transform.sax.TransformerHandler
                    public newTransformerHandler(): javax.xml.transform.sax.TransformerHandler
                    public newTemplatesHandler(): javax.xml.transform.sax.TemplatesHandler
                    public newXMLFilter(arg0: javax.xml.transform.Source): org.xml.sax.XMLFilter
                    public newXMLFilter(arg0: javax.xml.transform.Templates): org.xml.sax.XMLFilter
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}