declare namespace java {
  namespace sql {

    interface Array {
      getBaseTypeName(): java.lang.String
      getBaseType(): number
      getArray(): java.lang.Object
      getArray(arg0: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.lang.Object
      getArray(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): java.lang.Object
      getArray(arg0: number | java.lang.Long, arg1: number | java.lang.Integer, arg2: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.lang.Object
      getResultSet(): java.sql.ResultSet
      getResultSet(arg0: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.sql.ResultSet
      getResultSet(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): java.sql.ResultSet
      getResultSet(arg0: number | java.lang.Long, arg1: number | java.lang.Integer, arg2: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.sql.ResultSet
      free(): void
    }

  }
}
