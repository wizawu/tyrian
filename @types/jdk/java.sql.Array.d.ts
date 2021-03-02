declare namespace java {
  namespace sql {

    interface Array {
      getBaseTypeName(): java.lang.String
      getBaseType(): int
      getArray(): java.lang.Object
      getArray(arg0: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.lang.Object
      getArray(arg0: long, arg1: int): java.lang.Object
      getArray(arg0: long, arg1: int, arg2: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.lang.Object
      getResultSet(): java.sql.ResultSet
      getResultSet(arg0: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.sql.ResultSet
      getResultSet(arg0: long, arg1: int): java.sql.ResultSet
      getResultSet(arg0: long, arg1: int, arg2: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.sql.ResultSet
      free(): void
    }

  }
}
