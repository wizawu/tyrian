declare namespace javax {
  namespace management {
    namespace remote {
      namespace rmi {
        class RMIJRMPServerImpl extends javax.management.remote.rmi.RMIServerImpl {
          public constructor(
            arg0: number | java.lang.Integer,
            arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$lambda,
            arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$lambda,
            arg3: java.util.Map<java.lang.String, unknown>
          )
          protected export(): void
          protected getProtocol(): java.lang.String
          public toStub(): java.rmi.Remote
          protected makeClient(
            arg0: java.lang.String | string,
            arg1: javax.security.auth.Subject
          ): javax.management.remote.rmi.RMIConnection
          protected closeClient(arg0: javax.management.remote.rmi.RMIConnection): void
          protected closeServer(): void
          newClientCheckInput(arg0: java.io.ObjectInputFilter$FilterInfo): java.io.ObjectInputFilter$Status
        }
      }
    }
  }
}
