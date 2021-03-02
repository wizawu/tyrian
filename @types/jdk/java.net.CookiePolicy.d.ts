declare namespace java {
  namespace net {

    interface CookiePolicy$$lambda {
      (arg0: java.net.URI, arg1: java.net.HttpCookie): boolean
    }

    interface CookiePolicy {
      public static readonly ACCEPT_ALL: java.net.CookiePolicy
      public static readonly ACCEPT_NONE: java.net.CookiePolicy
      public static readonly ACCEPT_ORIGINAL_SERVER: java.net.CookiePolicy
      shouldAccept(arg0: java.net.URI, arg1: java.net.HttpCookie): boolean
    }

  }
}
