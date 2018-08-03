declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
                abstract class KeyManagerFactorySpi {
                    public constructor()
                    protected abstract engineInit(arg0: java.security.KeyStore, arg1: char[]): void
                    protected abstract engineGetKeyManagers(): com.sun.net.ssl.KeyManager[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}