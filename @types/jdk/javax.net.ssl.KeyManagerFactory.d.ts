declare namespace javax {
  namespace net {
    namespace ssl {

      class KeyManagerFactory {
        public static getDefaultAlgorithm(): java.lang.String
        protected constructor(arg0: javax.net.ssl.KeyManagerFactorySpi, arg1: java.security.Provider, arg2: java.lang.String | string)
        public getAlgorithm(): java.lang.String
        public static getInstance(arg0: java.lang.String | string): javax.net.ssl.KeyManagerFactory
        public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.net.ssl.KeyManagerFactory
        public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): javax.net.ssl.KeyManagerFactory
        public getProvider(): java.security.Provider
        public init(arg0: java.security.KeyStore, arg1: char[]): void
        public init(arg0: javax.net.ssl.ManagerFactoryParameters): void
        public getKeyManagers(): javax.net.ssl.KeyManager[]
      }

    }
  }
}
