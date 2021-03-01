declare namespace javax {
  namespace security {
    namespace auth {
      namespace kerberos {

        class KerberosCredMessage implements javax.security.auth.Destroyable {

          public constructor(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: javax.security.auth.kerberos.KerberosPrincipal, arg2: byte[])
          public getEncoded(): byte[]
          public getSender(): javax.security.auth.kerberos.KerberosPrincipal
          public getRecipient(): javax.security.auth.kerberos.KerberosPrincipal
          public destroy(): void
          public isDestroyed(): boolean
          public toString(): java.lang.String
          public hashCode(): int
          public equals(arg0: java.lang.Object): boolean
        }

      }
    }
  }
}
