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
                        public abstract getPrimaryPrincipal(): sun.security.krb5.PrincipalName
                        public abstract update(arg0: sun.security.krb5.internal.ccache.Credentials): void
                        public abstract save(): void
                        public abstract getCredsList(): sun.security.krb5.internal.ccache.Credentials[]
                        public abstract getDefaultCreds(): sun.security.krb5.internal.ccache.Credentials
                        public abstract getInitialCreds(): sun.security.krb5.Credentials
                        public abstract getCreds(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.Credentials
                        public abstract getCreds(arg0: sun.security.krb5.internal.LoginOptions, arg1: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.Credentials
                        public abstract addConfigEntry(arg0: sun.security.krb5.internal.ccache.CredentialsCache$ConfigEntry): void
                        public abstract getConfigEntries(): java.util.List<sun.security.krb5.internal.ccache.CredentialsCache$ConfigEntry>
                        public getConfigEntry(arg0: java.lang.String | string): sun.security.krb5.internal.ccache.CredentialsCache$ConfigEntry
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}