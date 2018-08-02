declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
                class X509KeyManagerComSunWrapper implements com.sun.net.ssl.X509KeyManager {
                    public getClientAliases(arg0: java.lang.String | string, arg1: java.security.Principal[]): java.lang.String[]
                    public chooseClientAlias(arg0: java.lang.String | string, arg1: java.security.Principal[]): string
                    public getServerAliases(arg0: java.lang.String | string, arg1: java.security.Principal[]): java.lang.String[]
                    public chooseServerAlias(arg0: java.lang.String | string, arg1: java.security.Principal[]): string
                    public getCertificateChain(arg0: java.lang.String | string): java.security.cert.X509Certificate[]
                    public getPrivateKey(arg0: java.lang.String | string): java.security.PrivateKey
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}