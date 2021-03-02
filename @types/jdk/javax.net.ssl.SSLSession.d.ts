declare namespace javax {
  namespace net {
    namespace ssl {

      interface SSLSession {
        getId(): number[]
        getSessionContext(): javax.net.ssl.SSLSessionContext
        getCreationTime(): number
        getLastAccessedTime(): number
        invalidate(): void
        isValid(): boolean
        putValue(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
        getValue(arg0: java.lang.String | string): java.lang.Object
        removeValue(arg0: java.lang.String | string): void
        getValueNames(): java.lang.String[]
        getPeerCertificates(): java.security.cert.Certificate[]
        getLocalCertificates(): java.security.cert.Certificate[]
        getPeerCertificateChain(): javax.security.cert.X509Certificate[]
        getPeerPrincipal(): java.security.Principal
        getLocalPrincipal(): java.security.Principal
        getCipherSuite(): java.lang.String
        getProtocol(): java.lang.String
        getPeerHost(): java.lang.String
        getPeerPort(): number
        getPacketBufferSize(): number
        getApplicationBufferSize(): number
      }

    }
  }
}
