declare namespace sun {
    namespace security {
        namespace ssl {
            class AbstractKeyManagerWrapper extends javax.net.ssl.X509ExtendedKeyManager {
                public getClientAliases(arg0: java.lang.String | string, arg1: java.security.Principal[]): java.lang.String[]
                public chooseClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: java.net.Socket): string
                public getServerAliases(arg0: java.lang.String | string, arg1: java.security.Principal[]): java.lang.String[]
                public chooseServerAlias(arg0: java.lang.String | string, arg1: java.security.Principal[], arg2: java.net.Socket): string
                public getCertificateChain(arg0: java.lang.String | string): java.security.cert.X509Certificate[]
                public getPrivateKey(arg0: java.lang.String | string): java.security.PrivateKey
                public static class: java.lang.Class<any>
            }
        }
    }
}