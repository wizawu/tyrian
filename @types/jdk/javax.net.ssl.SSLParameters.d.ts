declare namespace javax {
  namespace net {
    namespace ssl {
      class SSLParameters {
        public constructor()
        public constructor(arg0: java.lang.String[] | string[])
        public constructor(arg0: java.lang.String[] | string[], arg1: java.lang.String[] | string[])
        public getCipherSuites(): java.lang.String[]
        public setCipherSuites(arg0: java.lang.String[] | string[]): void
        public getProtocols(): java.lang.String[]
        public setProtocols(arg0: java.lang.String[] | string[]): void
        public getWantClientAuth(): boolean
        public setWantClientAuth(arg0: boolean | java.lang.Boolean): void
        public getNeedClientAuth(): boolean
        public setNeedClientAuth(arg0: boolean | java.lang.Boolean): void
        public getAlgorithmConstraints(): java.security.AlgorithmConstraints
        public setAlgorithmConstraints(arg0: java.security.AlgorithmConstraints): void
        public getEndpointIdentificationAlgorithm(): java.lang.String
        public setEndpointIdentificationAlgorithm(arg0: java.lang.String | string): void
        public setServerNames(arg0: java.util.List<javax.net.ssl.SNIServerName>): void
        public getServerNames(): java.util.List<javax.net.ssl.SNIServerName>
        public setSNIMatchers(arg0: java.util.Collection<javax.net.ssl.SNIMatcher>): void
        public getSNIMatchers(): java.util.Collection<javax.net.ssl.SNIMatcher>
        public setUseCipherSuitesOrder(arg0: boolean | java.lang.Boolean): void
        public getUseCipherSuitesOrder(): boolean
        public setEnableRetransmissions(arg0: boolean | java.lang.Boolean): void
        public getEnableRetransmissions(): boolean
        public setMaximumPacketSize(arg0: number | java.lang.Integer): void
        public getMaximumPacketSize(): number
        public getApplicationProtocols(): java.lang.String[]
        public setApplicationProtocols(arg0: java.lang.String[] | string[]): void
      }
    }
  }
}
