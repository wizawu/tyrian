declare namespace org {
  namespace xml {
    namespace sax {

      interface Attributes {
        getLength(): number
        getURI(arg0: number | java.lang.Integer): java.lang.String
        getLocalName(arg0: number | java.lang.Integer): java.lang.String
        getQName(arg0: number | java.lang.Integer): java.lang.String
        getType(arg0: number | java.lang.Integer): java.lang.String
        getValue(arg0: number | java.lang.Integer): java.lang.String
        getIndex(arg0: java.lang.String | string, arg1: java.lang.String | string): number
        getIndex(arg0: java.lang.String | string): number
        getType(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        getType(arg0: java.lang.String | string): java.lang.String
        getValue(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        getValue(arg0: java.lang.String | string): java.lang.String
      }

    }
  }
}
