declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace ccache {
                    class FileCredentialsCache extends sun.security.krb5.internal.ccache.CredentialsCache implements sun.security.krb5.internal.ccache.FileCCacheConstants {
                        public version: int
                        public tag: sun.security.krb5.internal.ccache.Tag
                        public primaryPrincipal: sun.security.krb5.PrincipalName
                        public static acquireInstance(arg0: sun.security.krb5.PrincipalName, arg1: java.lang.String | string): sun.security.krb5.internal.ccache.FileCredentialsCache
                        public static acquireInstance(): sun.security.krb5.internal.ccache.FileCredentialsCache
                        public update(arg0: sun.security.krb5.internal.ccache.Credentials): void
                        public getPrimaryPrincipal(): sun.security.krb5.PrincipalName
                        public save(): void
                        public getCredsList(): sun.security.krb5.internal.ccache.Credentials[]
                        public getCreds(arg0: sun.security.krb5.internal.LoginOptions, arg1: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.Credentials
                        public getCreds(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.Credentials
                        public getDefaultCreds(): sun.security.krb5.internal.ccache.Credentials
                        public static getDefaultCacheName(): string
                        public static checkValidation(arg0: java.lang.String | string): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}