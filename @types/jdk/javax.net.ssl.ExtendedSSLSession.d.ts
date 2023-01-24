declare namespace javax {
  namespace net {
    namespace ssl {
      abstract class ExtendedSSLSession implements javax.net.ssl.SSLSession {
        public constructor()
        public abstract getLocalSupportedSignatureAlgorithms(): java.lang.String[]
        public abstract getPeerSupportedSignatureAlgorithms(): java.lang.String[]
        public getRequestedServerNames(): java.util.List<javax.net.ssl.SNIServerName>
        public getStatusResponses(): java.util.List<byte[]>
      }
    }
  }
}
