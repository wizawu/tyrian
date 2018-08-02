declare namespace javax {
    namespace naming {
        namespace ldap {
abstract class StartTlsResponse implements javax.naming.ldap.ExtendedResponse {
    public static OID: string
    protected constructor()
    public getID(): string
    public getEncodedValue(): byte[]
    public setEnabledCipherSuites(arg0: java.lang.String[]): void
    public setHostnameVerifier(arg0: javax.net.ssl.HostnameVerifier | javax.net.ssl.HostnameVerifier$$Lambda): void
    public negotiate(): javax.net.ssl.SSLSession
    public negotiate(arg0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.SSLSession
    public close(): void
    public static class: java.lang.Class<any>
}

        }
    }
}