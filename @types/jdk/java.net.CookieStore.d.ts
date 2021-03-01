declare namespace java {
  namespace net {

    interface CookieStore {

      add(arg0: java.net.URI, arg1: java.net.HttpCookie): void
      get(arg0: java.net.URI): java.util.List<java.net.HttpCookie>
      getCookies(): java.util.List<java.net.HttpCookie>
      getURIs(): java.util.List<java.net.URI>
      remove(arg0: java.net.URI, arg1: java.net.HttpCookie): boolean
      removeAll(): boolean
    }

  }
}
