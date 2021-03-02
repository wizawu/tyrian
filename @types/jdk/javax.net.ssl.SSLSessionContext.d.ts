declare namespace javax {
  namespace net {
    namespace ssl {

      interface SSLSessionContext {
        getSession(arg0: byte[]): javax.net.ssl.SSLSession
        getIds(): java.util.Enumeration<byte[]>
        setSessionTimeout(arg0: number | java.lang.Integer): void
        getSessionTimeout(): number
        setSessionCacheSize(arg0: number | java.lang.Integer): void
        getSessionCacheSize(): number
      }

    }
  }
}
