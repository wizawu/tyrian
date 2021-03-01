declare namespace javax {
  namespace security {
    namespace auth {
      namespace kerberos {

        class KeyTab {

          public static getInstance(arg0: java.io.File): javax.security.auth.kerberos.KeyTab
          public static getUnboundInstance(arg0: java.io.File): javax.security.auth.kerberos.KeyTab
          public static getInstance(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: java.io.File): javax.security.auth.kerberos.KeyTab
          public static getInstance(): javax.security.auth.kerberos.KeyTab
          public static getUnboundInstance(): javax.security.auth.kerberos.KeyTab
          public static getInstance(arg0: javax.security.auth.kerberos.KerberosPrincipal): javax.security.auth.kerberos.KeyTab
          takeSnapshot(): sun.security.krb5.internal.ktab.KeyTab
          public getKeys(arg0: javax.security.auth.kerberos.KerberosPrincipal): javax.security.auth.kerberos.KerberosKey[]
          getEncryptionKeys(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.EncryptionKey[]
          public exists(): boolean
          public toString(): java.lang.String
          public hashCode(): int
          public equals(arg0: java.lang.Object): boolean
          public getPrincipal(): javax.security.auth.kerberos.KerberosPrincipal
          public isBound(): boolean
        }

      }
    }
  }
}
