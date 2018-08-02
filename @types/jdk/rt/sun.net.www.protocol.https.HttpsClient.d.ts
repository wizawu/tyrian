declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace https {
                    class HttpsClient extends sun.net.www.http.HttpClient implements javax.net.ssl.HandshakeCompletedListener {
                        protected getDefaultPort(): int
                        protected createSocket(): java.net.Socket
                        public needsTunneling(): boolean
                        public afterConnect(): void
                        protected putInKeepAliveCache(): void
                        public closeIdleConnection(): void
                        public getLocalCertificates(): java.security.cert.Certificate[]
                        public handshakeCompleted(arg0: javax.net.ssl.HandshakeCompletedEvent): void
                        public getProxyHostUsed(): string
                        public getProxyPortUsed(): int
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}