declare namespace java {
  namespace security {
    abstract class Identity implements java.security.Principal, java.io.Serializable {
      info: java.lang.String
      scope: java.security.IdentityScope
      certificates: java.util.Vector<java.security.Certificate>
      protected constructor()
      public constructor(arg0: java.lang.String | string, arg1: java.security.IdentityScope)
      public constructor(arg0: java.lang.String | string)
      public getName(): java.lang.String
      public getScope(): java.security.IdentityScope
      public getPublicKey(): java.security.PublicKey
      public setPublicKey(arg0: java.security.PublicKey): void
      public setInfo(arg0: java.lang.String | string): void
      public getInfo(): java.lang.String
      public addCertificate(arg0: java.security.Certificate): void
      public removeCertificate(arg0: java.security.Certificate): void
      public certificates(): java.security.Certificate[]
      public equals(arg0: java.lang.Object | any): boolean
      protected identityEquals(arg0: java.security.Identity): boolean
      fullName(): java.lang.String
      public toString(): java.lang.String
      public toString(arg0: boolean | java.lang.Boolean): java.lang.String
      printKeys(): java.lang.String
      printCertificates(): java.lang.String
      public hashCode(): number
    }
  }
}
