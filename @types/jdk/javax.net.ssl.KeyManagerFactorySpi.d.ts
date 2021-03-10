declare namespace javax {
  namespace net {
    namespace ssl {

      abstract class KeyManagerFactorySpi {
        public constructor()
        protected abstract engineInit(arg0: java.security.KeyStore, arg1: string[] | java.lang.Character[]): void
        protected abstract engineInit(arg0: javax.net.ssl.ManagerFactoryParameters): void
        protected abstract engineGetKeyManagers(): javax.net.ssl.KeyManager[]
      }

    }
  }
}
