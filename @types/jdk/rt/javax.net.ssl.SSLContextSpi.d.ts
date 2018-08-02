declare namespace javax {
    namespace net {
        namespace ssl {
            abstract class SSLContextSpi {
                public constructor()
                protected engineInit(arg0: javax.net.ssl.KeyManager[], arg1: javax.net.ssl.TrustManager[], arg2: java.security.SecureRandom): void
                protected engineGetSocketFactory(): javax.net.ssl.SSLSocketFactory
                protected engineGetServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory
                protected engineCreateSSLEngine(): javax.net.ssl.SSLEngine
                protected engineCreateSSLEngine(arg0: java.lang.String | string, arg1: int): javax.net.ssl.SSLEngine
                protected engineGetServerSessionContext(): javax.net.ssl.SSLSessionContext
                protected engineGetClientSessionContext(): javax.net.ssl.SSLSessionContext
                protected engineGetDefaultSSLParameters(): javax.net.ssl.SSLParameters
                protected engineGetSupportedSSLParameters(): javax.net.ssl.SSLParameters
                public static class: java.lang.Class<any>
            }
        }
    }
}