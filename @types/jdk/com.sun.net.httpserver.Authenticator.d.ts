declare namespace com {
  namespace sun {
    namespace net {
      namespace httpserver {

        abstract class Authenticator {
          public constructor()
          public abstract authenticate(arg0: com.sun.net.httpserver.HttpExchange): com.sun.net.httpserver.Authenticator$Result
        }

      }
    }
  }
}
