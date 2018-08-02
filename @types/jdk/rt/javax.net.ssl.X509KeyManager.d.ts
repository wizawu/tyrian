declare namespace javax {
    namespace net {
        namespace ssl {
interface X509KeyManager extends javax.net.ssl.KeyManager {
    getClientAliases(arg0: java.lang.String | string, arg1: java.security.Principal[]): java.lang.String[]
    chooseClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: java.net.Socket): string
    getServerAliases(arg0: java.lang.String | string, arg1: java.security.Principal[]): java.lang.String[]
    chooseServerAlias(arg0: java.lang.String | string, arg1: java.security.Principal[], arg2: java.net.Socket): string
    getCertificateChain(arg0: java.lang.String | string): java.security.cert.X509Certificate[]
    getPrivateKey(arg0: java.lang.String | string): java.security.PrivateKey
}

        }
    }
}