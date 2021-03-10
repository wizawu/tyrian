declare namespace java {
  namespace security {

    class DigestOutputStream extends java.io.FilterOutputStream {
      protected digest: java.security.MessageDigest
      public constructor(arg0: java.io.OutputStream, arg1: java.security.MessageDigest)
      public getMessageDigest(): java.security.MessageDigest
      public setMessageDigest(arg0: java.security.MessageDigest): void
      public write(arg0: number | java.lang.Integer): void
      public write(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public on(arg0: boolean | java.lang.Boolean): void
      public toString(): java.lang.String
    }

  }
}
