declare namespace javax {
  namespace management {
    namespace remote {
      namespace rmi {

        abstract class RMIServerImpl implements java.io.Closeable, javax.management.remote.rmi.RMIServer {
          public constructor(arg0: java.util.Map<java.lang.String,unknown>)
          setRMIConnectorServer(arg0: javax.management.remote.rmi.RMIConnectorServer): void
          protected abstract export(): void
          public abstract toStub(): java.rmi.Remote
          public setDefaultClassLoader(arg0: java.lang.ClassLoader): void
          public getDefaultClassLoader(): java.lang.ClassLoader
          public setMBeanServer(arg0: javax.management.MBeanServer): void
          public getMBeanServer(): javax.management.MBeanServer
          public getVersion(): java.lang.String
          public newClient(arg0: java.lang.Object | any): javax.management.remote.rmi.RMIConnection
          doNewClient(arg0: java.lang.Object | any): javax.management.remote.rmi.RMIConnection
          protected abstract makeClient(arg0: java.lang.String | string, arg1: javax.security.auth.Subject): javax.management.remote.rmi.RMIConnection
          protected abstract closeClient(arg0: javax.management.remote.rmi.RMIConnection): void
          protected abstract getProtocol(): java.lang.String
          protected clientClosed(arg0: javax.management.remote.rmi.RMIConnection): void
          public close(): void
          protected abstract closeServer(): void
          getNotifBuffer(): com.sun.jmx.remote.internal.NotificationBuffer
        }

      }
    }
  }
}
