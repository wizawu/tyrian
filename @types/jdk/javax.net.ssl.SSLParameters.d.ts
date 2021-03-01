declare namespace javax {
  namespace net {
    namespace ssl {

      class SSLParameters {

        public constructor()
        public constructor(arg0: java.lang.String[])
        public constructor(arg0: java.lang.String[], arg1: java.lang.String[])
        public getCipherSuites(): java.lang.String[]
        public setCipherSuites(arg0: java.lang.String[]): void
        public getProtocols(): java.lang.String[]
        public setProtocols(arg0: java.lang.String[]): void
        public getWantClientAuth(): boolean
        public setWantClientAuth(arg0: boolean): void
        public getNeedClientAuth(): boolean
        public setNeedClientAuth(arg0: boolean): void
        public getAlgorithmConstraints(): java.security.AlgorithmConstraints
        public setAlgorithmConstraints(arg0: java.security.AlgorithmConstraints): void
        public getEndpointIdentificationAlgorithm(): java.lang.String
        public setEndpointIdentificationAlgorithm(arg0: java.lang.String): void
        public readonly setServerNames(arg0: java.util.List<javax.net.ssl.SNIServerName>): void
        public readonly getServerNames(): java.util.List<javax.net.ssl.SNIServerName>
        public readonly setSNIMatchers(arg0: java.util.Collection<javax.net.ssl.SNIMatcher>): void
        public readonly getSNIMatchers(): java.util.Collection<javax.net.ssl.SNIMatcher>
        public readonly setUseCipherSuitesOrder(arg0: boolean): void
        public readonly getUseCipherSuitesOrder(): boolean
        public setEnableRetransmissions(arg0: boolean): void
        public getEnableRetransmissions(): boolean
        public setMaximumPacketSize(arg0: int): void
        public getMaximumPacketSize(): int
        public getApplicationProtocols(): java.lang.String[]
        public setApplicationProtocols(arg0: java.lang.String[]): void
      }

    }
  }
}
