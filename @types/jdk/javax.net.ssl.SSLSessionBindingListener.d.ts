declare namespace javax {
  namespace net {
    namespace ssl {
      interface SSLSessionBindingListener extends java.util.EventListener {
        valueBound(arg0: javax.net.ssl.SSLSessionBindingEvent): void
        valueUnbound(arg0: javax.net.ssl.SSLSessionBindingEvent): void
      }
    }
  }
}
