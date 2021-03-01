declare namespace javax {
  namespace security {
    namespace auth {
      namespace kerberos {

        class KerberosTicket implements javax.security.auth.Destroyable, javax.security.auth.Refreshable, java.io.Serializable {

          proxy: javax.security.auth.kerberos.KerberosTicket
          clientAlias: javax.security.auth.kerberos.KerberosPrincipal
          serverAlias: javax.security.auth.kerberos.KerberosPrincipal
          public constructor(arg0: byte[], arg1: javax.security.auth.kerberos.KerberosPrincipal, arg2: javax.security.auth.kerberos.KerberosPrincipal, arg3: byte[], arg4: int, arg5: boolean[], arg6: java.util.Date, arg7: java.util.Date, arg8: java.util.Date, arg9: java.util.Date, arg10: java.net.InetAddress[])
          public readonly getClient(): javax.security.auth.kerberos.KerberosPrincipal
          public readonly getServer(): javax.security.auth.kerberos.KerberosPrincipal
          public readonly getSessionKey(): javax.crypto.SecretKey
          public readonly getSessionKeyType(): int
          public readonly isForwardable(): boolean
          public readonly isForwarded(): boolean
          public readonly isProxiable(): boolean
          public readonly isProxy(): boolean
          public readonly isPostdated(): boolean
          public readonly isRenewable(): boolean
          public readonly isInitial(): boolean
          public readonly getFlags(): boolean[]
          public readonly getAuthTime(): java.util.Date
          public readonly getStartTime(): java.util.Date
          public readonly getEndTime(): java.util.Date
          public readonly getRenewTill(): java.util.Date
          public readonly getClientAddresses(): java.net.InetAddress[]
          public readonly getEncoded(): byte[]
          public isCurrent(): boolean
          public refresh(): void
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
