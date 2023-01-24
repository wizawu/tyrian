declare namespace javax {
  namespace naming {
    namespace ldap {
      abstract class StartTlsResponse implements javax.naming.ldap.ExtendedResponse {
        public static readonly OID: java.lang.String
        protected constructor()
        public getID(): java.lang.String
        public getEncodedValue(): number[]
        public abstract setEnabledCipherSuites(arg0: java.lang.String[] | string[]): void
        public abstract setHostnameVerifier(
          arg0: javax.net.ssl.HostnameVerifier | javax.net.ssl.HostnameVerifier$$lambda
        ): void
        public abstract negotiate(): javax.net.ssl.SSLSession
        public abstract negotiate(arg0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.SSLSession
        public abstract close(): void
      }
    }
  }
}
