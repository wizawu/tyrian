declare namespace com {
  namespace sun {
    namespace net {
      namespace httpserver {
        abstract class HttpContext {
          protected constructor()
          public abstract getHandler(): com.sun.net.httpserver.HttpHandler
          public abstract setHandler(
            arg0: com.sun.net.httpserver.HttpHandler | com.sun.net.httpserver.HttpHandler$$lambda
          ): void
          public abstract getPath(): java.lang.String
          public abstract getServer(): com.sun.net.httpserver.HttpServer
          public abstract getAttributes(): java.util.Map<java.lang.String, java.lang.Object>
          public abstract getFilters(): java.util.List<com.sun.net.httpserver.Filter>
          public abstract setAuthenticator(
            arg0: com.sun.net.httpserver.Authenticator
          ): com.sun.net.httpserver.Authenticator
          public abstract getAuthenticator(): com.sun.net.httpserver.Authenticator
        }
      }
    }
  }
}
