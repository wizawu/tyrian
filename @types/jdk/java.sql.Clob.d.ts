declare namespace java {
  namespace sql {

    interface Clob {
      length(): number
      getSubString(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): java.lang.String
      getCharacterStream(): java.io.Reader
      getAsciiStream(): java.io.InputStream
      position(arg0: java.lang.String | string, arg1: number | java.lang.Long): number
      position(arg0: java.sql.Clob, arg1: number | java.lang.Long): number
      setString(arg0: number | java.lang.Long, arg1: java.lang.String | string): number
      setString(arg0: number | java.lang.Long, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): number
      setAsciiStream(arg0: number | java.lang.Long): java.io.OutputStream
      setCharacterStream(arg0: number | java.lang.Long): java.io.Writer
      truncate(arg0: number | java.lang.Long): void
      free(): void
      getCharacterStream(arg0: number | java.lang.Long, arg1: number | java.lang.Long): java.io.Reader
    }

  }
}
