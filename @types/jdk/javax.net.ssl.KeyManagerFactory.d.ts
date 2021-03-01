declare namespace javax {
  namespace net {
    namespace ssl {

      class KeyManagerFactory {

        public static readonly getDefaultAlgorithm(): java.lang.String
        protected constructor(arg0: javax.net.ssl.KeyManagerFactorySpi, arg1: java.security.Provider, arg2: java.lang.String)
        public readonly getAlgorithm(): java.lang.String
        public static readonly getInstance(arg0: java.lang.String): javax.net.ssl.KeyManagerFactory
        public static readonly getInstance(arg0: java.lang.String, arg1: java.lang.String): javax.net.ssl.KeyManagerFactory
        public static readonly getInstance(arg0: java.lang.String, arg1: java.security.Provider): javax.net.ssl.KeyManagerFactory
        public readonly getProvider(): java.security.Provider
        public readonly init(arg0: java.security.KeyStore, arg1: char[]): void
        public readonly init(arg0: javax.net.ssl.ManagerFactoryParameters): void
        public readonly getKeyManagers(): javax.net.ssl.KeyManager[]
      }

    }
  }
}
