declare namespace javax {
  namespace rmi {
    namespace ssl {

      class SslRMIServerSocketFactory implements java.rmi.server.RMIServerSocketFactory {

        public constructor()
        public constructor(arg0: java.lang.String[], arg1: java.lang.String[], arg2: boolean)
        public constructor(arg0: javax.net.ssl.SSLContext, arg1: java.lang.String[], arg2: java.lang.String[], arg3: boolean)
        public readonly getEnabledCipherSuites(): java.lang.String[]
        public readonly getEnabledProtocols(): java.lang.String[]
        public readonly getNeedClientAuth(): boolean
        public createServerSocket(arg0: int): java.net.ServerSocket
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
      }

    }
  }
}
