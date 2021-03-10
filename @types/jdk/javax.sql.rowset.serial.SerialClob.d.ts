declare namespace javax {
  namespace sql {
    namespace rowset {
      namespace serial {

        class SerialClob implements java.sql.Clob, java.io.Serializable, java.lang.Cloneable {
          static readonly serialVersionUID: long
          public constructor(arg0: string[] | java.lang.Character[])
          public constructor(arg0: java.sql.Clob)
          public length(): number
          public getCharacterStream(): java.io.Reader
          public getAsciiStream(): java.io.InputStream
          public getSubString(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): java.lang.String
          public position(arg0: java.lang.String | string, arg1: number | java.lang.Long): number
          public position(arg0: java.sql.Clob, arg1: number | java.lang.Long): number
          public setString(arg0: number | java.lang.Long, arg1: java.lang.String | string): number
          public setString(arg0: number | java.lang.Long, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): number
          public setAsciiStream(arg0: number | java.lang.Long): java.io.OutputStream
          public setCharacterStream(arg0: number | java.lang.Long): java.io.Writer
          public truncate(arg0: number | java.lang.Long): void
          public getCharacterStream(arg0: number | java.lang.Long, arg1: number | java.lang.Long): java.io.Reader
          public free(): void
          public equals(arg0: java.lang.Object | any): boolean
          public hashCode(): number
          public clone(): java.lang.Object
        }

      }
    }
  }
}
