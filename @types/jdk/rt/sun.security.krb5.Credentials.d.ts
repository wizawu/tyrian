declare namespace sun {
    namespace security {
        namespace krb5 {
            class Credentials {
                public getProxy(): sun.security.krb5.Credentials
                public setProxy(arg0: sun.security.krb5.Credentials): sun.security.krb5.Credentials
                public constructor(arg0: sun.security.krb5.internal.Ticket, arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.PrincipalName, arg3: sun.security.krb5.EncryptionKey, arg4: sun.security.krb5.internal.TicketFlags, arg5: sun.security.krb5.internal.KerberosTime, arg6: sun.security.krb5.internal.KerberosTime, arg7: sun.security.krb5.internal.KerberosTime, arg8: sun.security.krb5.internal.KerberosTime, arg9: sun.security.krb5.internal.HostAddresses, arg10: sun.security.krb5.internal.AuthorizationData)
                public constructor(arg0: sun.security.krb5.internal.Ticket, arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.PrincipalName, arg3: sun.security.krb5.EncryptionKey, arg4: sun.security.krb5.internal.TicketFlags, arg5: sun.security.krb5.internal.KerberosTime, arg6: sun.security.krb5.internal.KerberosTime, arg7: sun.security.krb5.internal.KerberosTime, arg8: sun.security.krb5.internal.KerberosTime, arg9: sun.security.krb5.internal.HostAddresses)
                public constructor(arg0: byte[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: byte[], arg4: int, arg5: boolean[], arg6: java.util.Date, arg7: java.util.Date, arg8: java.util.Date, arg9: java.util.Date, arg10: java.net.InetAddress[])
                public getClient(): sun.security.krb5.PrincipalName
                public getServer(): sun.security.krb5.PrincipalName
                public getSessionKey(): sun.security.krb5.EncryptionKey
                public getAuthTime(): java.util.Date
                public getStartTime(): java.util.Date
                public getEndTime(): java.util.Date
                public getRenewTill(): java.util.Date
                public getFlags(): boolean[]
                public getClientAddresses(): java.net.InetAddress[]
                public getEncoded(): byte[]
                public isForwardable(): boolean
                public isRenewable(): boolean
                public getTicket(): sun.security.krb5.internal.Ticket
                public getTicketFlags(): sun.security.krb5.internal.TicketFlags
                public getAuthzData(): sun.security.krb5.internal.AuthorizationData
                public checkDelegate(): boolean
                public resetDelegate(): void
                public renew(): sun.security.krb5.Credentials
                public static acquireTGTFromCache(arg0: sun.security.krb5.PrincipalName, arg1: java.lang.String | string): sun.security.krb5.Credentials
                public static acquireDefaultCreds(): sun.security.krb5.Credentials
                public static acquireServiceCreds(arg0: java.lang.String | string, arg1: sun.security.krb5.Credentials): sun.security.krb5.Credentials
                public static acquireS4U2selfCreds(arg0: sun.security.krb5.PrincipalName, arg1: sun.security.krb5.Credentials): sun.security.krb5.Credentials
                public static acquireS4U2proxyCreds(arg0: java.lang.String | string, arg1: sun.security.krb5.internal.Ticket, arg2: sun.security.krb5.PrincipalName, arg3: sun.security.krb5.Credentials): sun.security.krb5.Credentials
                public getCache(): sun.security.krb5.internal.ccache.CredentialsCache
                public static printDebug(arg0: sun.security.krb5.Credentials): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}