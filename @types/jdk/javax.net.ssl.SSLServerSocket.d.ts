declare namespace javax {
  namespace net {
    namespace ssl {

      abstract class SSLServerSocket extends java.net.ServerSocket {
        protected constructor()
        protected constructor(arg0: number | java.lang.Integer)
        protected constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
        protected constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.net.InetAddress)
        public abstract getEnabledCipherSuites(): java.lang.String[]
        public abstract setEnabledCipherSuites(arg0: java.lang.String[] | string[]): void
        public abstract getSupportedCipherSuites(): java.lang.String[]
        public abstract getSupportedProtocols(): java.lang.String[]
        public abstract getEnabledProtocols(): java.lang.String[]
        public abstract setEnabledProtocols(arg0: java.lang.String[] | string[]): void
        public abstract setNeedClientAuth(arg0: boolean | java.lang.Boolean): void
        public abstract getNeedClientAuth(): boolean
        public abstract setWantClientAuth(arg0: boolean | java.lang.Boolean): void
        public abstract getWantClientAuth(): boolean
        public abstract setUseClientMode(arg0: boolean | java.lang.Boolean): void
        public abstract getUseClientMode(): boolean
        public abstract setEnableSessionCreation(arg0: boolean | java.lang.Boolean): void
        public abstract getEnableSessionCreation(): boolean
        public getSSLParameters(): javax.net.ssl.SSLParameters
        public setSSLParameters(arg0: javax.net.ssl.SSLParameters): void
      }

    }
  }
}
