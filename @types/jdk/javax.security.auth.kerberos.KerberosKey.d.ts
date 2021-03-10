declare namespace javax {
  namespace security {
    namespace auth {
      namespace kerberos {

        class KerberosKey implements javax.crypto.SecretKey {
          public constructor(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: number[] | java.lang.Byte[], arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
          public constructor(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: string[] | java.lang.Character[], arg2: java.lang.String | string)
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
