declare namespace javax {
  namespace crypto {

    class CipherOutputStream extends java.io.FilterOutputStream {
      public constructor(arg0: java.io.OutputStream, arg1: javax.crypto.Cipher)
      protected constructor(arg0: java.io.OutputStream)
      public write(arg0: number | java.lang.Integer): void
      public write(arg0: number[] | java.lang.Byte[]): void
      public write(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public flush(): void
      public close(): void
    }

  }
}
