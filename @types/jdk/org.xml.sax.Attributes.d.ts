declare namespace org {
  namespace xml {
    namespace sax {

      interface Attributes {
        getLength(): int
        getURI(arg0: int): java.lang.String
        getLocalName(arg0: int): java.lang.String
        getQName(arg0: int): java.lang.String
        getType(arg0: int): java.lang.String
        getValue(arg0: int): java.lang.String
        getIndex(arg0: java.lang.String, arg1: java.lang.String): int
        getIndex(arg0: java.lang.String): int
        getType(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        getType(arg0: java.lang.String): java.lang.String
        getValue(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        getValue(arg0: java.lang.String): java.lang.String
      }

    }
  }
}
