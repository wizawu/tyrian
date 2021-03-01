declare namespace javax {
  namespace net {
    namespace ssl {

      class SSLEngineResult {

        public constructor(arg0: javax.net.ssl.SSLEngineResult$Status, arg1: javax.net.ssl.SSLEngineResult$HandshakeStatus, arg2: int, arg3: int)
        public constructor(arg0: javax.net.ssl.SSLEngineResult$Status, arg1: javax.net.ssl.SSLEngineResult$HandshakeStatus, arg2: int, arg3: int, arg4: long)
        public readonly getStatus(): javax.net.ssl.SSLEngineResult$Status
        public readonly getHandshakeStatus(): javax.net.ssl.SSLEngineResult$HandshakeStatus
        public readonly bytesConsumed(): int
        public readonly bytesProduced(): int
        public readonly sequenceNumber(): long
        public toString(): java.lang.String
      }

    }
  }
}
