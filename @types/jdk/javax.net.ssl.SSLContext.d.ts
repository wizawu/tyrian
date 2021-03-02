declare namespace javax {
  namespace net {
    namespace ssl {

      class SSLContext {
        protected constructor(arg0: javax.net.ssl.SSLContextSpi, arg1: java.security.Provider, arg2: java.lang.String | string)
        public static getDefault(): javax.net.ssl.SSLContext
        public static setDefault(arg0: javax.net.ssl.SSLContext): void
        public static getInstance(arg0: java.lang.String | string): javax.net.ssl.SSLContext
        public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.net.ssl.SSLContext
        public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): javax.net.ssl.SSLContext
        public getProtocol(): java.lang.String
        public getProvider(): java.security.Provider
        public init(arg0: javax.net.ssl.KeyManager[], arg1: javax.net.ssl.TrustManager[], arg2: java.security.SecureRandom): void
        public getSocketFactory(): javax.net.ssl.SSLSocketFactory
        public getServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory
        public createSSLEngine(): javax.net.ssl.SSLEngine
        public createSSLEngine(arg0: java.lang.String | string, arg1: number | java.lang.Integer): javax.net.ssl.SSLEngine
        public getServerSessionContext(): javax.net.ssl.SSLSessionContext
        public getClientSessionContext(): javax.net.ssl.SSLSessionContext
        public getDefaultSSLParameters(): javax.net.ssl.SSLParameters
        public getSupportedSSLParameters(): javax.net.ssl.SSLParameters
      }

    }
  }
}
