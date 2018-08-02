declare namespace sun {
    namespace security {
        namespace ssl {
            class SSLSessionImpl extends javax.net.ssl.ExtendedSSLSession {
                public isValid(): boolean
                public getId(): byte[]
                public getSessionContext(): javax.net.ssl.SSLSessionContext
                public getCipherSuite(): string
                public getProtocol(): string
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public getPeerCertificates(): java.security.cert.Certificate[]
                public getLocalCertificates(): java.security.cert.Certificate[]
                public getPeerCertificateChain(): javax.security.cert.X509Certificate[]
                public getCertificateChain(): java.security.cert.X509Certificate[]
                public getPeerPrincipal(): java.security.Principal
                public getLocalPrincipal(): java.security.Principal
                public getCreationTime(): long
                public getLastAccessedTime(): long
                public getPeerAddress(): java.net.InetAddress
                public getPeerHost(): string
                public getPeerPort(): int
                public invalidate(): void
                public putValue(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public getValue(arg0: java.lang.String | string): java.lang.Object
                public removeValue(arg0: java.lang.String | string): void
                public getValueNames(): java.lang.String[]
                protected expandBufferSizes(): void
                public getPacketBufferSize(): int
                public getApplicationBufferSize(): int
                public getLocalSupportedSignatureAlgorithms(): java.lang.String[]
                public getPeerSupportedSignatureAlgorithms(): java.lang.String[]
                public getRequestedServerNames(): java.util.List<javax.net.ssl.SNIServerName>
                public toString(): string
                protected finalize(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}