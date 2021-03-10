declare namespace javax {
  namespace rmi {
    namespace ssl {

      class SslRMIServerSocketFactory implements java.rmi.server.RMIServerSocketFactory {
        public constructor()
        public constructor(arg0: java.lang.String[] | string[], arg1: java.lang.String[] | string[], arg2: boolean | java.lang.Boolean)
        public constructor(arg0: javax.net.ssl.SSLContext, arg1: java.lang.String[] | string[], arg2: java.lang.String[] | string[], arg3: boolean | java.lang.Boolean)
        public getEnabledCipherSuites(): java.lang.String[]
        public getEnabledProtocols(): java.lang.String[]
        public getNeedClientAuth(): boolean
        public createServerSocket(arg0: number | java.lang.Integer): java.net.ServerSocket
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
      }

    }
  }
}
