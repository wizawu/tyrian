declare namespace javax {
  namespace net {
    namespace ssl {

      abstract class SSLContextSpi {
        public constructor()
        protected abstract engineInit(arg0: javax.net.ssl.KeyManager[], arg1: javax.net.ssl.TrustManager[], arg2: java.security.SecureRandom): void
        protected abstract engineGetSocketFactory(): javax.net.ssl.SSLSocketFactory
        protected abstract engineGetServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory
        protected abstract engineCreateSSLEngine(): javax.net.ssl.SSLEngine
        protected abstract engineCreateSSLEngine(arg0: java.lang.String | string, arg1: number | java.lang.Integer): javax.net.ssl.SSLEngine
        protected abstract engineGetServerSessionContext(): javax.net.ssl.SSLSessionContext
        protected abstract engineGetClientSessionContext(): javax.net.ssl.SSLSessionContext
        protected engineGetDefaultSSLParameters(): javax.net.ssl.SSLParameters
        protected engineGetSupportedSSLParameters(): javax.net.ssl.SSLParameters
      }

    }
  }
}
