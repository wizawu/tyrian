declare namespace javax {
    namespace net {
        namespace ssl {
            abstract class KeyManagerFactorySpi {
                public constructor()
                protected engineInit(arg0: java.security.KeyStore, arg1: char[]): void
                protected engineInit(arg0: javax.net.ssl.ManagerFactoryParameters): void
                protected engineGetKeyManagers(): javax.net.ssl.KeyManager[]
                public static class: java.lang.Class<any>
            }
        }
    }
}