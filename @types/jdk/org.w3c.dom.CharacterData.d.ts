declare namespace org {
  namespace w3c {
    namespace dom {

      interface CharacterData extends org.w3c.dom.Node {
        getData(): java.lang.String
        setData(arg0: java.lang.String | string): void
        getLength(): number
        substringData(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
        appendData(arg0: java.lang.String | string): void
        insertData(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
        deleteData(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        replaceData(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.lang.String | string): void
      }

    }
  }
}
