declare namespace org {
  namespace w3c {
    namespace dom {

      interface NameList {
        getName(arg0: int): java.lang.String
        getNamespaceURI(arg0: int): java.lang.String
        getLength(): int
        contains(arg0: java.lang.String): boolean
        containsNS(arg0: java.lang.String, arg1: java.lang.String): boolean
      }

    }
  }
}
