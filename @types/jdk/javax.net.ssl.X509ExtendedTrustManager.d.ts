declare namespace javax {
  namespace net {
    namespace ssl {

      abstract class X509ExtendedTrustManager implements javax.net.ssl.X509TrustManager {

        public constructor()
        public abstract checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String, arg2: java.net.Socket): void
        public abstract checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String, arg2: java.net.Socket): void
        public abstract checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String, arg2: javax.net.ssl.SSLEngine): void
        public abstract checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String, arg2: javax.net.ssl.SSLEngine): void
      }

    }
  }
}
