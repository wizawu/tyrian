declare namespace javax {
  namespace xml {
    namespace transform {
      namespace sax {

        abstract class SAXTransformerFactory extends javax.xml.transform.TransformerFactory {

          public static readonly FEATURE: java.lang.String
          public static readonly FEATURE_XMLFILTER: java.lang.String
          protected constructor()
          public abstract newTransformerHandler(arg0: javax.xml.transform.Source): javax.xml.transform.sax.TransformerHandler
          public abstract newTransformerHandler(arg0: javax.xml.transform.Templates): javax.xml.transform.sax.TransformerHandler
          public abstract newTransformerHandler(): javax.xml.transform.sax.TransformerHandler
          public abstract newTemplatesHandler(): javax.xml.transform.sax.TemplatesHandler
          public abstract newXMLFilter(arg0: javax.xml.transform.Source): org.xml.sax.XMLFilter
          public abstract newXMLFilter(arg0: javax.xml.transform.Templates): org.xml.sax.XMLFilter
        }

      }
    }
  }
}
