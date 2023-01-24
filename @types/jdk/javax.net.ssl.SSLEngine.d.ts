declare namespace javax {
  namespace net {
    namespace ssl {
      abstract class SSLEngine {
        protected constructor()
        protected constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
        public getPeerHost(): java.lang.String
        public getPeerPort(): number
        public wrap(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult
        public wrap(arg0: java.nio.ByteBuffer[], arg1: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult
        public abstract wrap(
          arg0: java.nio.ByteBuffer[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: java.nio.ByteBuffer
        ): javax.net.ssl.SSLEngineResult
        public unwrap(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult
        public unwrap(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer[]): javax.net.ssl.SSLEngineResult
        public abstract unwrap(
          arg0: java.nio.ByteBuffer,
          arg1: java.nio.ByteBuffer[],
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): javax.net.ssl.SSLEngineResult
        public abstract getDelegatedTask(): java.lang.Runnable
        public abstract closeInbound(): void
        public abstract isInboundDone(): boolean
        public abstract closeOutbound(): void
        public abstract isOutboundDone(): boolean
        public abstract getSupportedCipherSuites(): java.lang.String[]
        public abstract getEnabledCipherSuites(): java.lang.String[]
        public abstract setEnabledCipherSuites(arg0: java.lang.String[] | string[]): void
        public abstract getSupportedProtocols(): java.lang.String[]
        public abstract getEnabledProtocols(): java.lang.String[]
        public abstract setEnabledProtocols(arg0: java.lang.String[] | string[]): void
        public abstract getSession(): javax.net.ssl.SSLSession
        public getHandshakeSession(): javax.net.ssl.SSLSession
        public abstract beginHandshake(): void
        public abstract getHandshakeStatus(): javax.net.ssl.SSLEngineResult$HandshakeStatus
        public abstract setUseClientMode(arg0: boolean | java.lang.Boolean): void
        public abstract getUseClientMode(): boolean
        public abstract setNeedClientAuth(arg0: boolean | java.lang.Boolean): void
        public abstract getNeedClientAuth(): boolean
        public abstract setWantClientAuth(arg0: boolean | java.lang.Boolean): void
        public abstract getWantClientAuth(): boolean
        public abstract setEnableSessionCreation(arg0: boolean | java.lang.Boolean): void
        public abstract getEnableSessionCreation(): boolean
        public getSSLParameters(): javax.net.ssl.SSLParameters
        public setSSLParameters(arg0: javax.net.ssl.SSLParameters): void
        public getApplicationProtocol(): java.lang.String
        public getHandshakeApplicationProtocol(): java.lang.String
        public setHandshakeApplicationProtocolSelector(
          arg0: java.util.function$.BiFunction<
            javax.net.ssl.SSLEngine,
            java.util.List<java.lang.String>,
            java.lang.String
          >
        ): void
        public getHandshakeApplicationProtocolSelector(): java.util.function$.BiFunction<
          javax.net.ssl.SSLEngine,
          java.util.List<java.lang.String>,
          java.lang.String
        >
      }
    }
  }
}
