declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace ccache {
                    abstract class MemoryCredentialsCache extends sun.security.krb5.internal.ccache.CredentialsCache {
                        public constructor()
                        public abstract exists(arg0: java.lang.String | string): boolean
                        public abstract update(arg0: sun.security.krb5.internal.ccache.Credentials): void
                        public abstract save(): void
                        public abstract getCredsList(): sun.security.krb5.internal.ccache.Credentials[]
                        public abstract getCreds(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.Credentials
                        public abstract getPrimaryPrincipal(): sun.security.krb5.PrincipalName
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}