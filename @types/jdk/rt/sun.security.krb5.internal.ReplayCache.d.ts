declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                abstract class ReplayCache {
                    public constructor()
                    public static getInstance(arg0: java.lang.String | string): sun.security.krb5.internal.ReplayCache
                    public static getInstance(): sun.security.krb5.internal.ReplayCache
                    public checkAndStore(arg0: sun.security.krb5.internal.KerberosTime, arg1: sun.security.krb5.internal.rcache.AuthTimeWithHash): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}