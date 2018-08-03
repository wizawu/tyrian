declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
                namespace internal {
                    namespace ssl {
                        abstract class X509ExtendedTrustManager implements javax.net.ssl.X509TrustManager {
                            protected constructor()
                            public abstract checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                            public abstract checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}