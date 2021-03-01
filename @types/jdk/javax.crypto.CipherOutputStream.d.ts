declare namespace javax {
  namespace crypto {

    class CipherOutputStream extends java.io.FilterOutputStream {

      public constructor(arg0: java.io.OutputStream, arg1: javax.crypto.Cipher)
      protected constructor(arg0: java.io.OutputStream)
      public write(arg0: int): void
      public write(arg0: byte[]): void
      public write(arg0: byte[], arg1: int, arg2: int): void
      public flush(): void
      public close(): void
    }

  }
}
