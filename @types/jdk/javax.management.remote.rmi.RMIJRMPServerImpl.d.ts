declare namespace javax {
  namespace management {
    namespace remote {
      namespace rmi {

        class RMIJRMPServerImpl extends javax.management.remote.rmi.RMIServerImpl {
          public constructor(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory, arg2: java.rmi.server.RMIServerSocketFactory, arg3: java.util.Map<java.lang.String,unknown>)
          protected export(): void
          protected getProtocol(): java.lang.String
          public toStub(): java.rmi.Remote
          protected makeClient(arg0: java.lang.String, arg1: javax.security.auth.Subject): javax.management.remote.rmi.RMIConnection
          protected closeClient(arg0: javax.management.remote.rmi.RMIConnection): void
          protected closeServer(): void
          newClientCheckInput(arg0: java.io.ObjectInputFilter$FilterInfo): java.io.ObjectInputFilter$Status
        }

      }
    }
  }
}
