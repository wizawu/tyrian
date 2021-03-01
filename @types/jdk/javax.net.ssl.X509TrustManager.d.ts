declare namespace javax {
  namespace net {
    namespace ssl {

      interface X509TrustManager extends javax.net.ssl.TrustManager {

        checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String): void
        checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String): void
        getAcceptedIssuers(): java.security.cert.X509Certificate[]
      }

    }
  }
}
