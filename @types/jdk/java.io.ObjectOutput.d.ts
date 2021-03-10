declare namespace java {
  namespace io {

    interface ObjectOutput extends java.io.DataOutput, java.lang.AutoCloseable {
      writeObject(arg0: java.lang.Object | any): void
      write(arg0: number | java.lang.Integer): void
      write(arg0: number[] | java.lang.Byte[]): void
      write(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      flush(): void
      close(): void
    }

  }
}
