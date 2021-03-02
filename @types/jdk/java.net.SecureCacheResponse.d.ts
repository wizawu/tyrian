declare namespace java {
  namespace net {

    abstract class SecureCacheResponse extends java.net.CacheResponse {
      public constructor()
      public abstract getCipherSuite(): java.lang.String
      public abstract getLocalCertificateChain(): java.util.List<java.security.cert.Certificate>
      public abstract getServerCertificateChain(): java.util.List<java.security.cert.Certificate>
      public abstract getPeerPrincipal(): java.security.Principal
      public abstract getLocalPrincipal(): java.security.Principal
    }

  }
}
