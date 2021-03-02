declare namespace java {
  namespace sql {

    interface Blob {
      length(): number
      getBytes(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): number[]
      getBinaryStream(): java.io.InputStream
      position(arg0: byte[], arg1: number | java.lang.Long): number
      position(arg0: java.sql.Blob, arg1: number | java.lang.Long): number
      setBytes(arg0: number | java.lang.Long, arg1: byte[]): number
      setBytes(arg0: number | java.lang.Long, arg1: byte[], arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): number
      setBinaryStream(arg0: number | java.lang.Long): java.io.OutputStream
      truncate(arg0: number | java.lang.Long): void
      free(): void
      getBinaryStream(arg0: number | java.lang.Long, arg1: number | java.lang.Long): java.io.InputStream
    }

  }
}
