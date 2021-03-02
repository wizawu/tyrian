declare namespace javax {
  namespace sql {
    namespace rowset {
      namespace serial {

        class SerialArray implements java.sql.Array, java.io.Serializable, java.lang.Cloneable {
          static readonly serialVersionUID: long
          public constructor(arg0: java.sql.Array, arg1: java.util.Map<java.lang.String,java.lang.Class<unknown>>)
          public free(): void
          public constructor(arg0: java.sql.Array)
          public getArray(): java.lang.Object
          public getArray(arg0: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.lang.Object
          public getArray(arg0: long, arg1: int): java.lang.Object
          public getArray(arg0: long, arg1: int, arg2: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.lang.Object
          public getBaseType(): int
          public getBaseTypeName(): java.lang.String
          public getResultSet(arg0: long, arg1: int): java.sql.ResultSet
          public getResultSet(arg0: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.sql.ResultSet
          public getResultSet(): java.sql.ResultSet
          public getResultSet(arg0: long, arg1: int, arg2: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.sql.ResultSet
          public equals(arg0: java.lang.Object): boolean
          public hashCode(): int
          public clone(): java.lang.Object
        }

      }
    }
  }
}
