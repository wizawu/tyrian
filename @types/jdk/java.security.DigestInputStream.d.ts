declare namespace java {
  namespace security {

    class DigestInputStream extends java.io.FilterInputStream {
      protected digest: java.security.MessageDigest
      public constructor(arg0: java.io.InputStream, arg1: java.security.MessageDigest)
      public getMessageDigest(): java.security.MessageDigest
      public setMessageDigest(arg0: java.security.MessageDigest): void
      public read(): int
      public read(arg0: byte[], arg1: int, arg2: int): int
      public on(arg0: boolean): void
      public toString(): java.lang.String
    }

  }
}
