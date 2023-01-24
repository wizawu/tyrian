declare namespace javax {
  namespace net {
    namespace ssl {
      class SSLEngineResult {
        public constructor(
          arg0: javax.net.ssl.SSLEngineResult$Status,
          arg1: javax.net.ssl.SSLEngineResult$HandshakeStatus,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        )
        public constructor(
          arg0: javax.net.ssl.SSLEngineResult$Status,
          arg1: javax.net.ssl.SSLEngineResult$HandshakeStatus,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Long
        )
        public getStatus(): javax.net.ssl.SSLEngineResult$Status
        public getHandshakeStatus(): javax.net.ssl.SSLEngineResult$HandshakeStatus
        public bytesConsumed(): number
        public bytesProduced(): number
        public sequenceNumber(): number
        public toString(): java.lang.String
      }
    }
  }
}
