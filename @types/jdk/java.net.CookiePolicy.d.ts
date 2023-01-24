declare namespace java {
  namespace net {
    interface CookiePolicy$$lambda {
      (arg0: java.net.URI, arg1: java.net.HttpCookie): boolean | java.lang.Boolean
    }

    interface CookiePolicy {
      readonly ACCEPT_ALL: java.net.CookiePolicy
      readonly ACCEPT_NONE: java.net.CookiePolicy
      readonly ACCEPT_ORIGINAL_SERVER: java.net.CookiePolicy
      shouldAccept(arg0: java.net.URI, arg1: java.net.HttpCookie): boolean
    }
  }
}
