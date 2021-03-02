declare namespace javax {
  namespace management {
    namespace remote {
      namespace rmi {

        class RMIIIOPServerImpl extends javax.management.remote.rmi.RMIServerImpl {
          public constructor(arg0: java.util.Map<java.lang.String,unknown>)
          protected export(): void
          protected getProtocol(): java.lang.String
          public toStub(): java.rmi.Remote
          protected makeClient(arg0: java.lang.String, arg1: javax.security.auth.Subject): javax.management.remote.rmi.RMIConnection
          protected closeClient(arg0: javax.management.remote.rmi.RMIConnection): void
          protected closeServer(): void
          doNewClient(arg0: java.lang.Object): javax.management.remote.rmi.RMIConnection
        }

      }
    }
  }
}
