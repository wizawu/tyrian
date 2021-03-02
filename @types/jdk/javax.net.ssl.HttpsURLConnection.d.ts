declare namespace javax {
  namespace net {
    namespace ssl {

      abstract class HttpsURLConnection extends java.net.HttpURLConnection {
        protected hostnameVerifier: javax.net.ssl.HostnameVerifier
        protected constructor(arg0: java.net.URL)
        public abstract getCipherSuite(): java.lang.String
        public abstract getLocalCertificates(): java.security.cert.Certificate[]
        public abstract getServerCertificates(): java.security.cert.Certificate[]
        public getPeerPrincipal(): java.security.Principal
        public getLocalPrincipal(): java.security.Principal
        public static setDefaultHostnameVerifier(arg0: javax.net.ssl.HostnameVerifier): void
        public static getDefaultHostnameVerifier(): javax.net.ssl.HostnameVerifier
        public setHostnameVerifier(arg0: javax.net.ssl.HostnameVerifier): void
        public getHostnameVerifier(): javax.net.ssl.HostnameVerifier
        public static setDefaultSSLSocketFactory(arg0: javax.net.ssl.SSLSocketFactory): void
        public static getDefaultSSLSocketFactory(): javax.net.ssl.SSLSocketFactory
        public setSSLSocketFactory(arg0: javax.net.ssl.SSLSocketFactory): void
        public getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory
      }

    }
  }
}
