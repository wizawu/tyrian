declare namespace javax {
  namespace net {
    namespace ssl {

      abstract class SSLSocket extends java.net.Socket {
        protected constructor()
        protected constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
        protected constructor(arg0: java.net.InetAddress, arg1: number | java.lang.Integer)
        protected constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: java.net.InetAddress, arg3: number | java.lang.Integer)
        protected constructor(arg0: java.net.InetAddress, arg1: number | java.lang.Integer, arg2: java.net.InetAddress, arg3: number | java.lang.Integer)
        public abstract getSupportedCipherSuites(): java.lang.String[]
        public abstract getEnabledCipherSuites(): java.lang.String[]
        public abstract setEnabledCipherSuites(arg0: java.lang.String[] | string[]): void
        public abstract getSupportedProtocols(): java.lang.String[]
        public abstract getEnabledProtocols(): java.lang.String[]
        public abstract setEnabledProtocols(arg0: java.lang.String[] | string[]): void
        public abstract getSession(): javax.net.ssl.SSLSession
        public getHandshakeSession(): javax.net.ssl.SSLSession
        public abstract addHandshakeCompletedListener(arg0: javax.net.ssl.HandshakeCompletedListener | javax.net.ssl.HandshakeCompletedListener$$lambda): void
        public abstract removeHandshakeCompletedListener(arg0: javax.net.ssl.HandshakeCompletedListener | javax.net.ssl.HandshakeCompletedListener$$lambda): void
        public abstract startHandshake(): void
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
        public setHandshakeApplicationProtocolSelector(arg0: java.util.function$.BiFunction<javax.net.ssl.SSLSocket,java.util.List<java.lang.String>,java.lang.String>): void
        public getHandshakeApplicationProtocolSelector(): java.util.function$.BiFunction<javax.net.ssl.SSLSocket,java.util.List<java.lang.String>,java.lang.String>
      }

    }
  }
}
