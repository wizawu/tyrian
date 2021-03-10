declare namespace java {
  namespace security {

    class DigestInputStream extends java.io.FilterInputStream {
      protected digest: java.security.MessageDigest
      public constructor(arg0: java.io.InputStream, arg1: java.security.MessageDigest)
      public getMessageDigest(): java.security.MessageDigest
      public setMessageDigest(arg0: java.security.MessageDigest): void
      public read(): number
      public read(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public on(arg0: boolean | java.lang.Boolean): void
      public toString(): java.lang.String
    }

  }
}
