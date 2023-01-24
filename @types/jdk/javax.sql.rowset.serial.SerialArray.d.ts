declare namespace javax {
  namespace sql {
    namespace rowset {
      namespace serial {
        class SerialArray implements java.sql.Array, java.io.Serializable, java.lang.Cloneable {
          static readonly serialVersionUID: long
          public constructor(arg0: java.sql.Array, arg1: java.util.Map<java.lang.String, java.lang.Class<unknown>>)
          public free(): void
          public constructor(arg0: java.sql.Array)
          public getArray(): java.lang.Object
          public getArray(arg0: java.util.Map<java.lang.String, java.lang.Class<unknown>>): java.lang.Object
          public getArray(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): java.lang.Object
          public getArray(
            arg0: number | java.lang.Long,
            arg1: number | java.lang.Integer,
            arg2: java.util.Map<java.lang.String, java.lang.Class<unknown>>
          ): java.lang.Object
          public getBaseType(): number
          public getBaseTypeName(): java.lang.String
          public getResultSet(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): java.sql.ResultSet
          public getResultSet(arg0: java.util.Map<java.lang.String, java.lang.Class<unknown>>): java.sql.ResultSet
          public getResultSet(): java.sql.ResultSet
          public getResultSet(
            arg0: number | java.lang.Long,
            arg1: number | java.lang.Integer,
            arg2: java.util.Map<java.lang.String, java.lang.Class<unknown>>
          ): java.sql.ResultSet
          public equals(arg0: java.lang.Object | any): boolean
          public hashCode(): number
          public clone(): java.lang.Object
        }
      }
    }
  }
}
