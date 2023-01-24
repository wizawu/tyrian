declare namespace javax {
  namespace security {
    namespace auth {
      namespace kerberos {
        class KerberosCredMessage implements javax.security.auth.Destroyable {
          public constructor(
            arg0: javax.security.auth.kerberos.KerberosPrincipal,
            arg1: javax.security.auth.kerberos.KerberosPrincipal,
            arg2: number[] | java.lang.Byte[]
          )
          public getEncoded(): number[]
          public getSender(): javax.security.auth.kerberos.KerberosPrincipal
          public getRecipient(): javax.security.auth.kerberos.KerberosPrincipal
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
