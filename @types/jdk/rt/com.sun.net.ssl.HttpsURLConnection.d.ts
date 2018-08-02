declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
abstract class HttpsURLConnection extends java.net.HttpURLConnection {
    protected hostnameVerifier: com.sun.net.ssl.HostnameVerifier
    public constructor(arg0: java.net.URL)
    public getCipherSuite(): string
    public getServerCertificateChain(): javax.security.cert.X509Certificate[]
    public static setDefaultHostnameVerifier(arg0: com.sun.net.ssl.HostnameVerifier | com.sun.net.ssl.HostnameVerifier$$Lambda): void
    public static getDefaultHostnameVerifier(): com.sun.net.ssl.HostnameVerifier
    public setHostnameVerifier(arg0: com.sun.net.ssl.HostnameVerifier | com.sun.net.ssl.HostnameVerifier$$Lambda): void
    public getHostnameVerifier(): com.sun.net.ssl.HostnameVerifier
    public static setDefaultSSLSocketFactory(arg0: javax.net.ssl.SSLSocketFactory): void
    public static getDefaultSSLSocketFactory(): javax.net.ssl.SSLSocketFactory
    public setSSLSocketFactory(arg0: javax.net.ssl.SSLSocketFactory): void
    public getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory
    public static class: java.lang.Class<any>
}

            }
        }
    }
}