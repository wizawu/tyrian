declare namespace java {
  namespace security {
    class CodeSource implements java.io.Serializable {
      public constructor(arg0: java.net.URL, arg1: java.security.cert.Certificate[])
      public constructor(arg0: java.net.URL, arg1: java.security.CodeSigner[])
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public getLocation(): java.net.URL
      getLocationNoFragString(): java.lang.String
      public getCertificates(): java.security.cert.Certificate[]
      public getCodeSigners(): java.security.CodeSigner[]
      public implies(arg0: java.security.CodeSource): boolean
      matchCerts(arg0: java.security.CodeSource, arg1: boolean | java.lang.Boolean): boolean
      public toString(): java.lang.String
    }
  }
}
