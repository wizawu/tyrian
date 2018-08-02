declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
class X509KeyManagerJavaxWrapper implements javax.net.ssl.X509KeyManager {
    public getClientAliases(arg0: java.lang.String | string, arg1: java.security.Principal[]): java.lang.String[]
    public chooseClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: java.net.Socket): string
    public chooseEngineClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
    public getServerAliases(arg0: java.lang.String | string, arg1: java.security.Principal[]): java.lang.String[]
    public chooseServerAlias(arg0: java.lang.String | string, arg1: java.security.Principal[], arg2: java.net.Socket): string
    public chooseEngineServerAlias(arg0: java.lang.String | string, arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
    public getCertificateChain(arg0: java.lang.String | string): java.security.cert.X509Certificate[]
    public getPrivateKey(arg0: java.lang.String | string): java.security.PrivateKey
    public static class: java.lang.Class<any>
}

            }
        }
    }
}