declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace ccache {
                    abstract class MemoryCredentialsCache extends sun.security.krb5.internal.ccache.CredentialsCache {
                        public constructor()
                        public exists(arg0: java.lang.String | string): boolean
                        public update(arg0: sun.security.krb5.internal.ccache.Credentials): void
                        public save(): void
                        public getCredsList(): sun.security.krb5.internal.ccache.Credentials[]
                        public getCreds(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.Credentials
                        public getPrimaryPrincipal(): sun.security.krb5.PrincipalName
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}