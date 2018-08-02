declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
                abstract class SSLContextSpi {
                    public constructor()
                    protected engineInit(arg0: com.sun.net.ssl.KeyManager[], arg1: com.sun.net.ssl.TrustManager[], arg2: java.security.SecureRandom): void
                    protected engineGetSocketFactory(): javax.net.ssl.SSLSocketFactory
                    protected engineGetServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}