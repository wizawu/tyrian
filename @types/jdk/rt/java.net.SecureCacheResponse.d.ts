declare namespace java {
    namespace net {
        abstract class SecureCacheResponse extends java.net.CacheResponse {
            public constructor()
            public getCipherSuite(): string
            public getLocalCertificateChain(): java.util.List<java.security.cert.Certificate>
            public getServerCertificateChain(): java.util.List<java.security.cert.Certificate>
            public getPeerPrincipal(): java.security.Principal
            public getLocalPrincipal(): java.security.Principal
            public static class: java.lang.Class<any>
        }
    }
}