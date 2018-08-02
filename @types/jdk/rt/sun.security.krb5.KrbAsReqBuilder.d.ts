declare namespace sun {
    namespace security {
        namespace krb5 {
            class KrbAsReqBuilder {
                public constructor(arg0: sun.security.krb5.PrincipalName, arg1: javax.security.auth.kerberos.KeyTab)
                public constructor(arg0: sun.security.krb5.PrincipalName, arg1: char[])
                public getKeys(arg0: boolean): sun.security.krb5.EncryptionKey[]
                public setOptions(arg0: sun.security.krb5.internal.KDCOptions): void
                public setTarget(arg0: sun.security.krb5.PrincipalName): void
                public setAddresses(arg0: sun.security.krb5.internal.HostAddresses): void
                public action(): sun.security.krb5.KrbAsReqBuilder
                public getCreds(): sun.security.krb5.Credentials
                public getCCreds(): sun.security.krb5.internal.ccache.Credentials
                public destroy(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}