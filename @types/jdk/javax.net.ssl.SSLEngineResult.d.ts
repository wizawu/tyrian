declare namespace javax {
  namespace net {
    namespace ssl {

      class SSLEngineResult {
        public constructor(arg0: javax.net.ssl.SSLEngineResult$Status, arg1: javax.net.ssl.SSLEngineResult$HandshakeStatus, arg2: int, arg3: int)
        public constructor(arg0: javax.net.ssl.SSLEngineResult$Status, arg1: javax.net.ssl.SSLEngineResult$HandshakeStatus, arg2: int, arg3: int, arg4: long)
        public getStatus(): javax.net.ssl.SSLEngineResult$Status
        public getHandshakeStatus(): javax.net.ssl.SSLEngineResult$HandshakeStatus
        public bytesConsumed(): int
        public bytesProduced(): int
        public sequenceNumber(): long
        public toString(): java.lang.String
      }

    }
  }
}
