declare namespace org {
  namespace xml {
    namespace sax {
      namespace ext {

        interface Locator2 extends org.xml.sax.Locator {

          getXMLVersion(): java.lang.String
          getEncoding(): java.lang.String
        }

      }
    }
  }
}
