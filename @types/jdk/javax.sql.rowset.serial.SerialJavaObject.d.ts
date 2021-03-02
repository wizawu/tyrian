declare namespace javax {
  namespace sql {
    namespace rowset {
      namespace serial {

        class SerialJavaObject implements java.io.Serializable, java.lang.Cloneable {
          static readonly serialVersionUID: long
          chain: java.util.Vector<javax.sql.rowset.RowSetWarning>
          public constructor(arg0: java.lang.Object)
          public getObject(): java.lang.Object
          public getFields(): java.lang.reflect.Field[]
          public equals(arg0: java.lang.Object): boolean
          public hashCode(): int
          public clone(): java.lang.Object
        }

      }
    }
  }
}
