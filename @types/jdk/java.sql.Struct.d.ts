declare namespace java {
  namespace sql {

    interface Struct {
      getSQLTypeName(): java.lang.String
      getAttributes(): java.lang.Object[]
      getAttributes(arg0: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.lang.Object[]
    }

  }
}
