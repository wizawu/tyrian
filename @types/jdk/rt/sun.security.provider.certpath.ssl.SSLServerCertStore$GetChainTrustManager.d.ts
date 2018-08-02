declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                namespace ssl {
                    class SSLServerCertStore$GetChainTrustManager extends javax.net.ssl.X509ExtendedTrustManager {
                        public getAcceptedIssuers(): java.security.cert.X509Certificate[]
                        public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string): void
                        public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string, arg2: java.net.Socket): void
                        public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string, arg2: javax.net.ssl.SSLEngine): void
                        public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string): void
                        public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string, arg2: java.net.Socket): void
                        public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: java.lang.String | string, arg2: javax.net.ssl.SSLEngine): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}