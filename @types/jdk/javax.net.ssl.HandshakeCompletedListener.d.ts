declare namespace javax {
  namespace net {
    namespace ssl {
      interface HandshakeCompletedListener$$lambda {
        (arg0: javax.net.ssl.HandshakeCompletedEvent): void
      }

      interface HandshakeCompletedListener extends java.util.EventListener {
        handshakeCompleted(arg0: javax.net.ssl.HandshakeCompletedEvent): void
      }
    }
  }
}
