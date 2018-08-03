declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
                abstract class SSLContextSpi {
                    public constructor()
                    protected abstract engineInit(arg0: com.sun.net.ssl.KeyManager[], arg1: com.sun.net.ssl.TrustManager[], arg2: java.security.SecureRandom): void
                    protected abstract engineGetSocketFactory(): javax.net.ssl.SSLSocketFactory
                    protected abstract engineGetServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}