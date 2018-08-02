declare namespace sun {
    namespace security {
        namespace ssl {
class DummyX509TrustManager extends javax.net.ssl.X509ExtendedTrustManager implements javax.net.ssl.X509TrustManager {
    public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string): void
    public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string): void
    public getAcceptedIssuers(): java.security.cert.X509Certificate[]
    public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string, arg2: java.net.Socket): void
    public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string, arg2: java.net.Socket): void
    public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string, arg2: javax.net.ssl.SSLEngine): void
    public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string, arg2: javax.net.ssl.SSLEngine): void
    public static class: java.lang.Class<any>
}

        }
    }
}