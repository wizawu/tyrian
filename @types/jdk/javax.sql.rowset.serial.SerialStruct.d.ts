declare namespace javax {
  namespace sql {
    namespace rowset {
      namespace serial {
        class SerialStruct implements java.sql.Struct, java.io.Serializable, java.lang.Cloneable {
          static readonly serialVersionUID: long
          public constructor(arg0: java.sql.Struct, arg1: java.util.Map<java.lang.String, java.lang.Class<unknown>>)
          public constructor(arg0: java.sql.SQLData, arg1: java.util.Map<java.lang.String, java.lang.Class<unknown>>)
          public getSQLTypeName(): java.lang.String
          public getAttributes(): java.lang.Object[]
          public getAttributes(arg0: java.util.Map<java.lang.String, java.lang.Class<unknown>>): java.lang.Object[]
          public equals(arg0: java.lang.Object | any): boolean
          public hashCode(): number
          public clone(): java.lang.Object
        }
      }
    }
  }
}
