declare namespace javax {
    namespace net {
        namespace ssl {
            abstract class X509ExtendedTrustManager implements javax.net.ssl.X509TrustManager {
                public constructor()
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string, arg2: java.net.Socket): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string, arg2: java.net.Socket): void
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string, arg2: javax.net.ssl.SSLEngine): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string, arg2: javax.net.ssl.SSLEngine): void
                public static class: java.lang.Class<any>
            }
        }
    }
}