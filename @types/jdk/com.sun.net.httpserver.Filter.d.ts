declare namespace com {
  namespace sun {
    namespace net {
      namespace httpserver {
        abstract class Filter {
          protected constructor()
          public abstract doFilter(
            arg0: com.sun.net.httpserver.HttpExchange,
            arg1: com.sun.net.httpserver.Filter$Chain
          ): void
          public abstract description(): java.lang.String
        }
      }
    }
  }
}
