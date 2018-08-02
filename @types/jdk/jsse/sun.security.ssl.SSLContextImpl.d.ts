declare namespace sun {
    namespace security {
        namespace ssl {
abstract class SSLContextImpl extends javax.net.ssl.SSLContextSpi {
    protected engineInit(arg0: javax.net.ssl.KeyManager[], arg1: javax.net.ssl.TrustManager[], arg2: java.security.SecureRandom): void
    protected engineGetSocketFactory(): javax.net.ssl.SSLSocketFactory
    protected engineGetServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory
    protected engineCreateSSLEngine(): javax.net.ssl.SSLEngine
    protected engineCreateSSLEngine(arg0: java.lang.String | string, arg1: int): javax.net.ssl.SSLEngine
    protected engineGetClientSessionContext(): javax.net.ssl.SSLSessionContext
    protected engineGetServerSessionContext(): javax.net.ssl.SSLSessionContext
    public static class: java.lang.Class<any>
}

        }
    }
}