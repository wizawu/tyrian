declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace https {
                    abstract class AbstractDelegateHttpsURLConnection extends sun.net.www.protocol.http.HttpURLConnection {
                        protected constructor(arg0: java.net.URL, arg1: sun.net.www.protocol.http.Handler)
                        protected constructor(arg0: java.net.URL, arg1: java.net.Proxy, arg2: sun.net.www.protocol.http.Handler)
                        protected abstract getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory
                        protected abstract getHostnameVerifier(): javax.net.ssl.HostnameVerifier
                        public setNewClient(arg0: java.net.URL): void
                        public setNewClient(arg0: java.net.URL, arg1: boolean): void
                        public setProxiedClient(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int): void
                        public setProxiedClient(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int, arg3: boolean): void
                        protected proxiedConnect(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int, arg3: boolean): void
                        public isConnected(): boolean
                        public setConnected(arg0: boolean): void
                        public connect(): void
                        protected getNewHttpClient(arg0: java.net.URL, arg1: java.net.Proxy, arg2: int): sun.net.www.http.HttpClient
                        protected getNewHttpClient(arg0: java.net.URL, arg1: java.net.Proxy, arg2: int, arg3: boolean): sun.net.www.http.HttpClient
                        public getCipherSuite(): string
                        public getLocalCertificates(): java.security.cert.Certificate[]
                        public getServerCertificates(): java.security.cert.Certificate[]
                        public getServerCertificateChain(): javax.security.cert.X509Certificate[]
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}