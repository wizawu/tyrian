declare namespace javax {
    namespace naming {
        namespace ldap {
            abstract class StartTlsResponse implements javax.naming.ldap.ExtendedResponse {
                public static readonly OID: string
                protected constructor()
                public getID(): string
                public getEncodedValue(): byte[]
                public abstract setEnabledCipherSuites(arg0: java.lang.String[]): void
                public abstract setHostnameVerifier(arg0: javax.net.ssl.HostnameVerifier | javax.net.ssl.HostnameVerifier$$Lambda): void
                public abstract negotiate(): javax.net.ssl.SSLSession
                public abstract negotiate(arg0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.SSLSession
                public abstract close(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}