declare namespace javax {
  namespace xml {
    namespace transform {
      namespace sax {

        interface TemplatesHandler extends org.xml.sax.ContentHandler {

          getTemplates(): javax.xml.transform.Templates
          setSystemId(arg0: java.lang.String): void
          getSystemId(): java.lang.String
        }

      }
    }
  }
}
