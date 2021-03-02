declare namespace javax {
  namespace net {
    namespace ssl {

      class SSLEngineResult$HandshakeStatus extends java.lang.Enum<javax.net.ssl.SSLEngineResult$HandshakeStatus> {
        public static readonly NOT_HANDSHAKING: javax.net.ssl.SSLEngineResult$HandshakeStatus
        public static readonly FINISHED: javax.net.ssl.SSLEngineResult$HandshakeStatus
        public static readonly NEED_TASK: javax.net.ssl.SSLEngineResult$HandshakeStatus
        public static readonly NEED_WRAP: javax.net.ssl.SSLEngineResult$HandshakeStatus
        public static readonly NEED_UNWRAP: javax.net.ssl.SSLEngineResult$HandshakeStatus
        public static readonly NEED_UNWRAP_AGAIN: javax.net.ssl.SSLEngineResult$HandshakeStatus
        public static values(): javax.net.ssl.SSLEngineResult$HandshakeStatus[]
        public static valueOf(arg0: java.lang.String | string): javax.net.ssl.SSLEngineResult$HandshakeStatus
      }

    }
  }
}
