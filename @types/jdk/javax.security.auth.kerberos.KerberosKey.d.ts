declare namespace javax {
  namespace security {
    namespace auth {
      namespace kerberos {

        class KerberosKey implements javax.crypto.SecretKey {
          public constructor(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: byte[], arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
          public constructor(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: char[], arg2: java.lang.String | string)
          public getPrincipal(): javax.security.auth.kerberos.KerberosPrincipal
          public getVersionNumber(): number
          public getKeyType(): number
          public getAlgorithm(): java.lang.String
          public getFormat(): java.lang.String
          public getEncoded(): number[]
          public destroy(): void
          public isDestroyed(): boolean
          public toString(): java.lang.String
          public hashCode(): number
          public equals(arg0: java.lang.Object | any): boolean
        }

      }
    }
  }
}
