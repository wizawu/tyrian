declare namespace java {
  namespace io {
    interface ObjectInput extends java.io.DataInput, java.lang.AutoCloseable {
      readObject(): java.lang.Object
      read(): number
      read(arg0: number[] | java.lang.Byte[]): number
      read(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      skip(arg0: number | java.lang.Long): number
      available(): number
      close(): void
    }
  }
}
