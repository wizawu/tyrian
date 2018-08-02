declare namespace javax {
    namespace net {
        namespace ssl {
            interface X509TrustManager extends javax.net.ssl.TrustManager {
                checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string): void
                checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string): void
                getAcceptedIssuers(): java.security.cert.X509Certificate[]
            }
        }
    }
}