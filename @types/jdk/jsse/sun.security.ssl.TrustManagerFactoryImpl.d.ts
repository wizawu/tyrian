declare namespace sun {
    namespace security {
        namespace ssl {
            abstract class TrustManagerFactoryImpl extends javax.net.ssl.TrustManagerFactorySpi {
                protected engineInit(arg0: java.security.KeyStore): void
                protected engineInit(arg0: javax.net.ssl.ManagerFactoryParameters): void
                protected engineGetTrustManagers(): javax.net.ssl.TrustManager[]
                public static class: java.lang.Class<any>
            }
        }
    }
}