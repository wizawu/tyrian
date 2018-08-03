declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
                abstract class TrustManagerFactorySpi {
                    public constructor()
                    protected abstract engineInit(arg0: java.security.KeyStore): void
                    protected abstract engineGetTrustManagers(): com.sun.net.ssl.TrustManager[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}