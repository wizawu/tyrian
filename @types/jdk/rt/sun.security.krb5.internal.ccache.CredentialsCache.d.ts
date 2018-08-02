declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace ccache {
abstract class CredentialsCache {
    public constructor()
    public static getInstance(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.CredentialsCache
    public static getInstance(arg0: java.lang.String | string): sun.security.krb5.internal.ccache.CredentialsCache
    public static getInstance(arg0: sun.security.krb5.PrincipalName, arg1: java.lang.String | string): sun.security.krb5.internal.ccache.CredentialsCache
    public static getInstance(): sun.security.krb5.internal.ccache.CredentialsCache
    public static create(arg0: sun.security.krb5.PrincipalName, arg1: java.lang.String | string): sun.security.krb5.internal.ccache.CredentialsCache
    public static create(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.CredentialsCache
    public static cacheName(): string
    public getPrimaryPrincipal(): sun.security.krb5.PrincipalName
    public update(arg0: sun.security.krb5.internal.ccache.Credentials): void
    public save(): void
    public getCredsList(): sun.security.krb5.internal.ccache.Credentials[]
    public getDefaultCreds(): sun.security.krb5.internal.ccache.Credentials
    public getCreds(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.Credentials
    public getCreds(arg0: sun.security.krb5.internal.LoginOptions, arg1: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.Credentials
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}