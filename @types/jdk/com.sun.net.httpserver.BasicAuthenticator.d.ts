declare namespace com {
  namespace sun {
    namespace net {
      namespace httpserver {

        abstract class BasicAuthenticator extends com.sun.net.httpserver.Authenticator {

          protected realm: java.lang.String
          public constructor(arg0: java.lang.String)
          public getRealm(): java.lang.String
          public authenticate(arg0: com.sun.net.httpserver.HttpExchange): com.sun.net.httpserver.Authenticator$Result
          public abstract checkCredentials(arg0: java.lang.String, arg1: java.lang.String): boolean
        }

      }
    }
  }
}
