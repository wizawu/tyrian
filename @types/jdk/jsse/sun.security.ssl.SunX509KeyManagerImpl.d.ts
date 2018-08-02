declare namespace sun {
    namespace security {
        namespace ssl {
class SunX509KeyManagerImpl extends javax.net.ssl.X509ExtendedKeyManager {
    public getCertificateChain(arg0: java.lang.String | string): java.security.cert.X509Certificate[]
    public getPrivateKey(arg0: java.lang.String | string): java.security.PrivateKey
    public chooseClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: java.net.Socket): string
    public chooseEngineClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
    public chooseServerAlias(arg0: java.lang.String | string, arg1: java.security.Principal[], arg2: java.net.Socket): string
    public chooseEngineServerAlias(arg0: java.lang.String | string, arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
    public getClientAliases(arg0: java.lang.String | string, arg1: java.security.Principal[]): java.lang.String[]
    public getServerAliases(arg0: java.lang.String | string, arg1: java.security.Principal[]): java.lang.String[]
    public static class: java.lang.Class<any>
}

        }
    }
}