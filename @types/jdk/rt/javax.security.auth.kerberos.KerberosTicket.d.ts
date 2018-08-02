declare namespace javax {
    namespace security {
        namespace auth {
            namespace kerberos {
class KerberosTicket implements javax.security.auth.Destroyable , javax.security.auth.Refreshable , java.io.Serializable {
    public constructor(arg0: byte[], arg1: javax.security.auth.kerberos.KerberosPrincipal, arg2: javax.security.auth.kerberos.KerberosPrincipal, arg3: byte[], arg4: int, arg5: boolean[], arg6: java.util.Date, arg7: java.util.Date, arg8: java.util.Date, arg9: java.util.Date, arg10: java.net.InetAddress[])
    public getClient(): javax.security.auth.kerberos.KerberosPrincipal
    public getServer(): javax.security.auth.kerberos.KerberosPrincipal
    public getSessionKey(): javax.crypto.SecretKey
    public getSessionKeyType(): int
    public isForwardable(): boolean
    public isForwarded(): boolean
    public isProxiable(): boolean
    public isProxy(): boolean
    public isPostdated(): boolean
    public isRenewable(): boolean
    public isInitial(): boolean
    public getFlags(): boolean[]
    public getAuthTime(): java.util.Date
    public getStartTime(): java.util.Date
    public getEndTime(): java.util.Date
    public getRenewTill(): java.util.Date
    public getClientAddresses(): java.net.InetAddress[]
    public getEncoded(): byte[]
    public isCurrent(): boolean
    public refresh(): void
    public destroy(): void
    public isDestroyed(): boolean
    public toString(): string
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public static class: java.lang.Class<any>
}

            }
        }
    }
}