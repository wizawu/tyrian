declare namespace javax {
  namespace net {
    namespace ssl {

      class SSLContext {

        protected constructor(arg0: javax.net.ssl.SSLContextSpi, arg1: java.security.Provider, arg2: java.lang.String)
        public static getDefault(): javax.net.ssl.SSLContext
        public static setDefault(arg0: javax.net.ssl.SSLContext): void
        public static getInstance(arg0: java.lang.String): javax.net.ssl.SSLContext
        public static getInstance(arg0: java.lang.String, arg1: java.lang.String): javax.net.ssl.SSLContext
        public static getInstance(arg0: java.lang.String, arg1: java.security.Provider): javax.net.ssl.SSLContext
        public readonly getProtocol(): java.lang.String
        public readonly getProvider(): java.security.Provider
        public readonly init(arg0: javax.net.ssl.KeyManager[], arg1: javax.net.ssl.TrustManager[], arg2: java.security.SecureRandom): void
        public readonly getSocketFactory(): javax.net.ssl.SSLSocketFactory
        public readonly getServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory
        public readonly createSSLEngine(): javax.net.ssl.SSLEngine
        public readonly createSSLEngine(arg0: java.lang.String, arg1: int): javax.net.ssl.SSLEngine
        public readonly getServerSessionContext(): javax.net.ssl.SSLSessionContext
        public readonly getClientSessionContext(): javax.net.ssl.SSLSessionContext
        public readonly getDefaultSSLParameters(): javax.net.ssl.SSLParameters
        public readonly getSupportedSSLParameters(): javax.net.ssl.SSLParameters
      }

    }
  }
}
