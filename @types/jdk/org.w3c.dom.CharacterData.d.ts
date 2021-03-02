declare namespace org {
  namespace w3c {
    namespace dom {

      interface CharacterData extends org.w3c.dom.Node {
        getData(): java.lang.String
        setData(arg0: java.lang.String): void
        getLength(): int
        substringData(arg0: int, arg1: int): java.lang.String
        appendData(arg0: java.lang.String): void
        insertData(arg0: int, arg1: java.lang.String): void
        deleteData(arg0: int, arg1: int): void
        replaceData(arg0: int, arg1: int, arg2: java.lang.String): void
      }

    }
  }
}
