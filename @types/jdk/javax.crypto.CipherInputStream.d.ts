declare namespace javax {
  namespace crypto {

    class CipherInputStream extends java.io.FilterInputStream {
      public constructor(arg0: java.io.InputStream, arg1: javax.crypto.Cipher)
      protected constructor(arg0: java.io.InputStream)
      public read(): number
      public read(arg0: byte[]): number
      public read(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public skip(arg0: number | java.lang.Long): number
      public available(): number
      public close(): void
      public markSupported(): boolean
    }

  }
}
