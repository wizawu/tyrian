declare namespace javax {
  namespace management {
    namespace remote {
      namespace rmi {

        class RMIConnectorServer extends javax.management.remote.JMXConnectorServer {
          public static readonly JNDI_REBIND_ATTRIBUTE: java.lang.String
          public static readonly RMI_CLIENT_SOCKET_FACTORY_ATTRIBUTE: java.lang.String
          public static readonly RMI_SERVER_SOCKET_FACTORY_ATTRIBUTE: java.lang.String
          public static readonly CREDENTIAL_TYPES: java.lang.String
          public static readonly CREDENTIALS_FILTER_PATTERN: java.lang.String
          public static readonly SERIAL_FILTER_PATTERN: java.lang.String
          public constructor(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String,unknown>)
          public constructor(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String,unknown>, arg2: javax.management.MBeanServer)
          public constructor(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String,unknown>, arg2: javax.management.remote.rmi.RMIServerImpl, arg3: javax.management.MBeanServer)
          public toJMXConnector(arg0: java.util.Map<java.lang.String,unknown>): javax.management.remote.JMXConnector
          public start(): void
          public stop(): void
          public isActive(): boolean
          public getAddress(): javax.management.remote.JMXServiceURL
          public getAttributes(): java.util.Map<java.lang.String,unknown>
          public setMBeanServerForwarder(arg0: javax.management.remote.MBeanServerForwarder): void
          protected connectionOpened(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.Object): void
          protected connectionClosed(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.Object): void
          protected connectionFailed(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.Object): void
          bind(arg0: java.lang.String, arg1: java.util.Hashtable<unknown,unknown>, arg2: javax.management.remote.rmi.RMIServer, arg3: boolean): void
          newServer(): javax.management.remote.rmi.RMIServerImpl
          static encodeStub(arg0: javax.management.remote.rmi.RMIServer, arg1: java.util.Map<java.lang.String,unknown>): java.lang.String
          static encodeJRMPStub(arg0: javax.management.remote.rmi.RMIServer, arg1: java.util.Map<java.lang.String,unknown>): java.lang.String
        }

      }
    }
  }
}
