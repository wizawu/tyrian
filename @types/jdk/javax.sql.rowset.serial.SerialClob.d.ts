declare namespace javax {
  namespace sql {
    namespace rowset {
      namespace serial {

        class SerialClob implements java.sql.Clob, java.io.Serializable, java.lang.Cloneable {

          static readonly serialVersionUID: long
          public constructor(arg0: char[])
          public constructor(arg0: java.sql.Clob)
          public length(): long
          public getCharacterStream(): java.io.Reader
          public getAsciiStream(): java.io.InputStream
          public getSubString(arg0: long, arg1: int): java.lang.String
          public position(arg0: java.lang.String, arg1: long): long
          public position(arg0: java.sql.Clob, arg1: long): long
          public setString(arg0: long, arg1: java.lang.String): int
          public setString(arg0: long, arg1: java.lang.String, arg2: int, arg3: int): int
          public setAsciiStream(arg0: long): java.io.OutputStream
          public setCharacterStream(arg0: long): java.io.Writer
          public truncate(arg0: long): void
          public getCharacterStream(arg0: long, arg1: long): java.io.Reader
          public free(): void
          public equals(arg0: java.lang.Object): boolean
          public hashCode(): int
          public clone(): java.lang.Object
        }

      }
    }
  }
}
