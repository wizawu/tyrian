declare namespace java {
  namespace io {

    interface ObjectInput extends java.io.DataInput, java.lang.AutoCloseable {
      readObject(): java.lang.Object
      read(): int
      read(arg0: byte[]): int
      read(arg0: byte[], arg1: int, arg2: int): int
      skip(arg0: long): long
      available(): int
      close(): void
    }

  }
}
