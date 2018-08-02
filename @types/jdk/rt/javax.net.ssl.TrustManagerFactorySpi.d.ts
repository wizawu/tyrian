declare namespace javax {
    namespace net {
        namespace ssl {
abstract class TrustManagerFactorySpi {
    public constructor()
    protected engineInit(arg0: java.security.KeyStore): void
    protected engineInit(arg0: javax.net.ssl.ManagerFactoryParameters): void
    protected engineGetTrustManagers(): javax.net.ssl.TrustManager[]
    public static class: java.lang.Class<any>
}

        }
    }
}