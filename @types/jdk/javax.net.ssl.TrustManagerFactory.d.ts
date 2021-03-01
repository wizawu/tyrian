declare namespace javax {
  namespace net {
    namespace ssl {

      class TrustManagerFactory {

        public static readonly getDefaultAlgorithm(): java.lang.String
        protected constructor(arg0: javax.net.ssl.TrustManagerFactorySpi, arg1: java.security.Provider, arg2: java.lang.String)
        public readonly getAlgorithm(): java.lang.String
        public static readonly getInstance(arg0: java.lang.String): javax.net.ssl.TrustManagerFactory
        public static readonly getInstance(arg0: java.lang.String, arg1: java.lang.String): javax.net.ssl.TrustManagerFactory
        public static readonly getInstance(arg0: java.lang.String, arg1: java.security.Provider): javax.net.ssl.TrustManagerFactory
        public readonly getProvider(): java.security.Provider
        public readonly init(arg0: java.security.KeyStore): void
        public readonly init(arg0: javax.net.ssl.ManagerFactoryParameters): void
        public readonly getTrustManagers(): javax.net.ssl.TrustManager[]
      }

    }
  }
}
