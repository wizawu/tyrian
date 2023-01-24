declare namespace com {
  namespace sun {
    namespace net {
      namespace httpserver {
        abstract class HttpsExchange extends com.sun.net.httpserver.HttpExchange {
          protected constructor()
          public abstract getSSLSession(): javax.net.ssl.SSLSession
        }
      }
    }
  }
}
