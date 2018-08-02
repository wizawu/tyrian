declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
interface X509TrustManager extends com.sun.net.ssl.TrustManager {
    isClientTrusted(arg0: java.security.cert.X509Certificate[]): boolean
    isServerTrusted(arg0: java.security.cert.X509Certificate[]): boolean
    getAcceptedIssuers(): java.security.cert.X509Certificate[]
}

            }
        }
    }
}