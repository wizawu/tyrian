declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                namespace ext {
                    class StartTlsResponseImpl extends javax.naming.ldap.StartTlsResponse {
                        public constructor()
                        public setEnabledCipherSuites(arg0: java.lang.String[]): void
                        public setHostnameVerifier(arg0: javax.net.ssl.HostnameVerifier | javax.net.ssl.HostnameVerifier$$Lambda): void
                        public negotiate(): javax.net.ssl.SSLSession
                        public negotiate(arg0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.SSLSession
                        public close(): void
                        public setConnection(arg0: com.sun.jndi.ldap.Connection, arg1: java.lang.String | string): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}