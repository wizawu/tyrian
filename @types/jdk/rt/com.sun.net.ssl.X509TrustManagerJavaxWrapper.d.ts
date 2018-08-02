declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
                class X509TrustManagerJavaxWrapper implements javax.net.ssl.X509TrustManager {
                    public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string): void
                    public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string): void
                    public getAcceptedIssuers(): java.security.cert.X509Certificate[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}