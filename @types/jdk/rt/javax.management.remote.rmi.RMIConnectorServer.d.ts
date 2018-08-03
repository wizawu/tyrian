declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                class RMIConnectorServer extends javax.management.remote.JMXConnectorServer {
                    public static readonly JNDI_REBIND_ATTRIBUTE: string
                    public static readonly RMI_CLIENT_SOCKET_FACTORY_ATTRIBUTE: string
                    public static readonly RMI_SERVER_SOCKET_FACTORY_ATTRIBUTE: string
                    public constructor(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>)
                    public constructor(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>, arg2: javax.management.MBeanServer)
                    public constructor(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>, arg2: javax.management.remote.rmi.RMIServerImpl, arg3: javax.management.MBeanServer)
                    public toJMXConnector(arg0: java.util.Map<java.lang.String, any>): javax.management.remote.JMXConnector
                    public start(): void
                    public stop(): void
                    public isActive(): boolean
                    public getAddress(): javax.management.remote.JMXServiceURL
                    public getAttributes(): java.util.Map<java.lang.String, any>
                    public setMBeanServerForwarder(arg0: javax.management.remote.MBeanServerForwarder): void
                    protected connectionOpened(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object): void
                    protected connectionClosed(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object): void
                    protected connectionFailed(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}