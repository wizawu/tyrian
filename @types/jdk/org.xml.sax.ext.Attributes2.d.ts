declare namespace org {
  namespace xml {
    namespace sax {
      namespace ext {
        interface Attributes2 extends org.xml.sax.Attributes {
          isDeclared(arg0: number | java.lang.Integer): boolean
          isDeclared(arg0: java.lang.String | string): boolean
          isDeclared(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
          isSpecified(arg0: number | java.lang.Integer): boolean
          isSpecified(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
          isSpecified(arg0: java.lang.String | string): boolean
        }
      }
    }
  }
}
