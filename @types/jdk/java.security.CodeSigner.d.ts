declare namespace java {
  namespace security {

    class CodeSigner implements java.io.Serializable {

      public constructor(arg0: java.security.cert.CertPath, arg1: java.security.Timestamp)
      public getSignerCertPath(): java.security.cert.CertPath
      public getTimestamp(): java.security.Timestamp
      public hashCode(): int
      public equals(arg0: java.lang.Object): boolean
      public toString(): java.lang.String
    }

  }
}
