declare namespace java {
  namespace sql {

    interface Ref {
      getBaseTypeName(): java.lang.String
      getObject(arg0: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.lang.Object
      getObject(): java.lang.Object
      setObject(arg0: java.lang.Object | any): void
    }

  }
}
