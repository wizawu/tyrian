declare namespace javax {
  namespace net {
    namespace ssl {

      interface SSLSessionContext {

        getSession(arg0: byte[]): javax.net.ssl.SSLSession
        getIds(): java.util.Enumeration<byte[]>
        setSessionTimeout(arg0: int): void
        getSessionTimeout(): int
        setSessionCacheSize(arg0: int): void
        getSessionCacheSize(): int
      }

    }
  }
}
