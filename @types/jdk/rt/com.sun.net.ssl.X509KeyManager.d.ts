declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
interface X509KeyManager extends com.sun.net.ssl.KeyManager {
    getClientAliases(arg0: java.lang.String | string, arg1: java.security.Principal[]): java.lang.String[]
    chooseClientAlias(arg0: java.lang.String | string, arg1: java.security.Principal[]): string
    getServerAliases(arg0: java.lang.String | string, arg1: java.security.Principal[]): java.lang.String[]
    chooseServerAlias(arg0: java.lang.String | string, arg1: java.security.Principal[]): string
    getCertificateChain(arg0: java.lang.String | string): java.security.cert.X509Certificate[]
    getPrivateKey(arg0: java.lang.String | string): java.security.PrivateKey
}

            }
        }
    }
}