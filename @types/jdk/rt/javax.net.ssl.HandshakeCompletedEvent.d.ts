declare namespace javax {
    namespace net {
        namespace ssl {
            class HandshakeCompletedEvent extends java.util.EventObject {
                public constructor(arg0: javax.net.ssl.SSLSocket, arg1: javax.net.ssl.SSLSession)
                public getSession(): javax.net.ssl.SSLSession
                public getCipherSuite(): string
                public getLocalCertificates(): java.security.cert.Certificate[]
                public getPeerCertificates(): java.security.cert.Certificate[]
                public getPeerCertificateChain(): javax.security.cert.X509Certificate[]
                public getPeerPrincipal(): java.security.Principal
                public getLocalPrincipal(): java.security.Principal
                public getSocket(): javax.net.ssl.SSLSocket
                public static class: java.lang.Class<any>
            }
        }
    }
}