declare namespace org {
  namespace xml {
    namespace sax {
      namespace ext {
        interface EntityResolver2 extends org.xml.sax.EntityResolver {
          getExternalSubset(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
          resolveEntity(
            arg0: java.lang.String | string,
            arg1: java.lang.String | string,
            arg2: java.lang.String | string,
            arg3: java.lang.String | string
          ): org.xml.sax.InputSource
        }
      }
    }
  }
}
