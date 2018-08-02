declare namespace javax {
    namespace net {
        namespace ssl {
            abstract class ExtendedSSLSession implements javax.net.ssl.SSLSession {
                public constructor()
                public getLocalSupportedSignatureAlgorithms(): java.lang.String[]
                public getPeerSupportedSignatureAlgorithms(): java.lang.String[]
                public getRequestedServerNames(): java.util.List<javax.net.ssl.SNIServerName>
                public static class: java.lang.Class<any>
            }
        }
    }
}