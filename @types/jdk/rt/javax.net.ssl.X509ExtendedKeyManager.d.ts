declare namespace javax {
    namespace net {
        namespace ssl {
            abstract class X509ExtendedKeyManager implements javax.net.ssl.X509KeyManager {
                protected constructor()
                public chooseEngineClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public chooseEngineServerAlias(arg0: java.lang.String | string, arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public static class: java.lang.Class<any>
            }
        }
    }
}