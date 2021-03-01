declare namespace java {
  namespace security {

    class CodeSource implements java.io.Serializable {

      public constructor(arg0: java.net.URL, arg1: java.security.cert.Certificate[])
      public constructor(arg0: java.net.URL, arg1: java.security.CodeSigner[])
      public hashCode(): int
      public equals(arg0: java.lang.Object): boolean
      public readonly getLocation(): java.net.URL
      getLocationNoFragString(): java.lang.String
      public readonly getCertificates(): java.security.cert.Certificate[]
      public readonly getCodeSigners(): java.security.CodeSigner[]
      public implies(arg0: java.security.CodeSource): boolean
      matchCerts(arg0: java.security.CodeSource, arg1: boolean): boolean
      public toString(): java.lang.String
    }

  }
}
