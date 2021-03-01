declare namespace javax {
  namespace security {
    namespace auth {
      namespace kerberos {

        class KerberosKey implements javax.crypto.SecretKey {

          public constructor(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: byte[], arg2: int, arg3: int)
          public constructor(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: char[], arg2: java.lang.String)
          public readonly getPrincipal(): javax.security.auth.kerberos.KerberosPrincipal
          public readonly getVersionNumber(): int
          public readonly getKeyType(): int
          public readonly getAlgorithm(): java.lang.String
          public readonly getFormat(): java.lang.String
          public readonly getEncoded(): byte[]
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
