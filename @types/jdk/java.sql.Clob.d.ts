declare namespace java {
  namespace sql {

    interface Clob {
      length(): long
      getSubString(arg0: long, arg1: int): java.lang.String
      getCharacterStream(): java.io.Reader
      getAsciiStream(): java.io.InputStream
      position(arg0: java.lang.String, arg1: long): long
      position(arg0: java.sql.Clob, arg1: long): long
      setString(arg0: long, arg1: java.lang.String): int
      setString(arg0: long, arg1: java.lang.String, arg2: int, arg3: int): int
      setAsciiStream(arg0: long): java.io.OutputStream
      setCharacterStream(arg0: long): java.io.Writer
      truncate(arg0: long): void
      free(): void
      getCharacterStream(arg0: long, arg1: long): java.io.Reader
    }

  }
}
