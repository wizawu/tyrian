declare namespace com {
  namespace sun {
    namespace net {
      namespace httpserver {

        abstract class HttpsParameters {

          protected constructor()
          public abstract getHttpsConfigurator(): com.sun.net.httpserver.HttpsConfigurator
          public abstract getClientAddress(): java.net.InetSocketAddress
          public abstract setSSLParameters(arg0: javax.net.ssl.SSLParameters): void
          public getCipherSuites(): java.lang.String[]
          public setCipherSuites(arg0: java.lang.String[]): void
          public getProtocols(): java.lang.String[]
          public setProtocols(arg0: java.lang.String[]): void
          public getWantClientAuth(): boolean
          public setWantClientAuth(arg0: boolean): void
          public getNeedClientAuth(): boolean
          public setNeedClientAuth(arg0: boolean): void
        }

      }
    }
  }
}
