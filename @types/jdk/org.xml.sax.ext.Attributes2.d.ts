declare namespace org {
  namespace xml {
    namespace sax {
      namespace ext {

        interface Attributes2 extends org.xml.sax.Attributes {

          isDeclared(arg0: int): boolean
          isDeclared(arg0: java.lang.String): boolean
          isDeclared(arg0: java.lang.String, arg1: java.lang.String): boolean
          isSpecified(arg0: int): boolean
          isSpecified(arg0: java.lang.String, arg1: java.lang.String): boolean
          isSpecified(arg0: java.lang.String): boolean
        }

      }
    }
  }
}
