declare namespace java {
  namespace net {

    class CookieManager extends java.net.CookieHandler {
      public constructor()
      public constructor(arg0: java.net.CookieStore, arg1: java.net.CookiePolicy)
      public setCookiePolicy(arg0: java.net.CookiePolicy): void
      public getCookieStore(): java.net.CookieStore
      public get(arg0: java.net.URI, arg1: java.util.Map<java.lang.String,java.util.List<java.lang.String>>): java.util.Map<java.lang.String,java.util.List<java.lang.String>>
      public put(arg0: java.net.URI, arg1: java.util.Map<java.lang.String,java.util.List<java.lang.String>>): void
    }

  }
}
