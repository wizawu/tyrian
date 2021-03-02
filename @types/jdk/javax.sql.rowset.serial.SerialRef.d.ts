declare namespace javax {
  namespace sql {
    namespace rowset {
      namespace serial {

        class SerialRef implements java.sql.Ref, java.io.Serializable, java.lang.Cloneable {
          static readonly serialVersionUID: long
          public constructor(arg0: java.sql.Ref)
          public getBaseTypeName(): java.lang.String
          public getObject(arg0: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.lang.Object
          public getObject(): java.lang.Object
          public setObject(arg0: java.lang.Object): void
          public equals(arg0: java.lang.Object): boolean
          public hashCode(): int
          public clone(): java.lang.Object
        }

      }
    }
  }
}
