declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace protocol {
                    namespace rmi {
                        class ClientProvider implements javax.management.remote.JMXConnectorProvider {
                            public constructor()
                            public newJMXConnector(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>): javax.management.remote.JMXConnector
                            public static class: java.lang.Class<any>
                        }
                        class ClientProvider$$Lambda implements javax.management.remote.JMXConnectorProvider {
                            public constructor()
                        }
                        class ServerProvider implements javax.management.remote.JMXConnectorServerProvider {
                            public constructor()
                            public newJMXConnectorServer(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>, arg2: javax.management.MBeanServer): javax.management.remote.JMXConnectorServer
                            public static class: java.lang.Class<any>
                        }
                        class ServerProvider$$Lambda implements javax.management.remote.JMXConnectorServerProvider {
                            public constructor()
                        }
                    }
                }
            }
        }
    }
}
declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                class NoCallStackClassLoader extends java.lang.ClassLoader {
                    public constructor(arg0: java.lang.String | string, arg1: byte[], arg2: java.lang.String[], arg3: java.lang.ClassLoader, arg4: java.security.ProtectionDomain)
                    public constructor(arg0: java.lang.String[], arg1: byte[][], arg2: java.lang.String[], arg3: java.lang.ClassLoader, arg4: java.security.ProtectionDomain)
                    protected findClass(arg0: java.lang.String | string): java.lang.Class<any>
                    public static stringToBytes(arg0: java.lang.String | string): byte[]
                    public static class: java.lang.Class<any>
                }
                interface RMIConnection extends java.io.Closeable , java.rmi.Remote {
                    getConnectionId(): string
                    close(): void
                    createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.security.auth.Subject): javax.management.ObjectInstance
                    createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: javax.security.auth.Subject): javax.management.ObjectInstance
                    createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.rmi.MarshalledObject, arg3: java.lang.String[], arg4: javax.security.auth.Subject): javax.management.ObjectInstance
                    createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: java.rmi.MarshalledObject, arg4: java.lang.String[], arg5: javax.security.auth.Subject): javax.management.ObjectInstance
                    unregisterMBean(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): void
                    getObjectInstance(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): javax.management.ObjectInstance
                    queryMBeans(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): java.util.Set<javax.management.ObjectInstance>
                    queryNames(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): java.util.Set<javax.management.ObjectName>
                    isRegistered(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): boolean
                    getMBeanCount(arg0: javax.security.auth.Subject): java.lang.Integer
                    getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: javax.security.auth.Subject): java.lang.Object
                    getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[], arg2: javax.security.auth.Subject): javax.management.AttributeList
                    setAttribute(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): void
                    setAttributes(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): javax.management.AttributeList
                    invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.rmi.MarshalledObject, arg3: java.lang.String[], arg4: javax.security.auth.Subject): java.lang.Object
                    getDefaultDomain(arg0: javax.security.auth.Subject): string
                    getDomains(arg0: javax.security.auth.Subject): java.lang.String[]
                    getMBeanInfo(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): javax.management.MBeanInfo
                    isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: javax.security.auth.Subject): boolean
                    addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: java.rmi.MarshalledObject, arg3: java.rmi.MarshalledObject, arg4: javax.security.auth.Subject): void
                    removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.security.auth.Subject): void
                    removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: java.rmi.MarshalledObject, arg3: java.rmi.MarshalledObject, arg4: javax.security.auth.Subject): void
                    addNotificationListeners(arg0: javax.management.ObjectName[], arg1: java.rmi.MarshalledObject[], arg2: javax.security.auth.Subject[]): java.lang.Integer[]
                    removeNotificationListeners(arg0: javax.management.ObjectName, arg1: java.lang.Integer[], arg2: javax.security.auth.Subject): void
                    fetchNotifications(arg0: long, arg1: int, arg2: long): javax.management.remote.NotificationResult
                }
                class RMIConnectionImpl implements javax.management.remote.rmi.RMIConnection , java.rmi.server.Unreferenced {
                    public constructor(arg0: javax.management.remote.rmi.RMIServerImpl, arg1: java.lang.String | string, arg2: java.lang.ClassLoader, arg3: javax.security.auth.Subject, arg4: java.util.Map<java.lang.String, any>)
                    public getConnectionId(): string
                    public close(): void
                    public unreferenced(): void
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.security.auth.Subject): javax.management.ObjectInstance
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: javax.security.auth.Subject): javax.management.ObjectInstance
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.rmi.MarshalledObject, arg3: java.lang.String[], arg4: javax.security.auth.Subject): javax.management.ObjectInstance
                    public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: java.rmi.MarshalledObject, arg4: java.lang.String[], arg5: javax.security.auth.Subject): javax.management.ObjectInstance
                    public unregisterMBean(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): void
                    public getObjectInstance(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): javax.management.ObjectInstance
                    public queryMBeans(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): java.util.Set<javax.management.ObjectInstance>
                    public queryNames(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): java.util.Set<javax.management.ObjectName>
                    public isRegistered(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): boolean
                    public getMBeanCount(arg0: javax.security.auth.Subject): java.lang.Integer
                    public getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: javax.security.auth.Subject): java.lang.Object
                    public getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[], arg2: javax.security.auth.Subject): javax.management.AttributeList
                    public setAttribute(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): void
                    public setAttributes(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): javax.management.AttributeList
                    public invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.rmi.MarshalledObject, arg3: java.lang.String[], arg4: javax.security.auth.Subject): java.lang.Object
                    public getDefaultDomain(arg0: javax.security.auth.Subject): string
                    public getDomains(arg0: javax.security.auth.Subject): java.lang.String[]
                    public getMBeanInfo(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): javax.management.MBeanInfo
                    public isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: javax.security.auth.Subject): boolean
                    public addNotificationListeners(arg0: javax.management.ObjectName[], arg1: java.rmi.MarshalledObject[], arg2: javax.security.auth.Subject[]): java.lang.Integer[]
                    public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: java.rmi.MarshalledObject, arg3: java.rmi.MarshalledObject, arg4: javax.security.auth.Subject): void
                    public removeNotificationListeners(arg0: javax.management.ObjectName, arg1: java.lang.Integer[], arg2: javax.security.auth.Subject): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.security.auth.Subject): void
                    public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: java.rmi.MarshalledObject, arg3: java.rmi.MarshalledObject, arg4: javax.security.auth.Subject): void
                    public fetchNotifications(arg0: long, arg1: int, arg2: long): javax.management.remote.NotificationResult
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class RMIConnectionImpl$$Lambda implements javax.management.remote.rmi.RMIConnection , java.rmi.server.Unreferenced {
                    public constructor(arg0: javax.management.remote.rmi.RMIServerImpl, arg1: java.lang.String | string, arg2: java.lang.ClassLoader, arg3: javax.security.auth.Subject, arg4: java.util.Map<java.lang.String, any>)
                }
                class RMIConnector implements javax.management.remote.JMXConnector , java.io.Serializable , javax.management.remote.JMXAddressable {
                    public constructor(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>)
                    public constructor(arg0: javax.management.remote.rmi.RMIServer, arg1: java.util.Map<java.lang.String, any>)
                    public toString(): string
                    public getAddress(): javax.management.remote.JMXServiceURL
                    public connect(): void
                    public connect(arg0: java.util.Map<java.lang.String, any>): void
                    public getConnectionId(): string
                    public getMBeanServerConnection(): javax.management.MBeanServerConnection
                    public getMBeanServerConnection(arg0: javax.security.auth.Subject): javax.management.MBeanServerConnection
                    public addConnectionNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
                    public removeConnectionNotificationListener(arg0: javax.management.NotificationListener): void
                    public removeConnectionNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
                    public close(): void
                    public static class: java.lang.Class<any>
                }
                class RMIConnector$$Lambda implements javax.management.remote.JMXConnector , java.io.Serializable , javax.management.remote.JMXAddressable {
                    public constructor(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>)
                }
                class RMIConnectorServer extends javax.management.remote.JMXConnectorServer {
                    public static JNDI_REBIND_ATTRIBUTE: string
                    public static RMI_CLIENT_SOCKET_FACTORY_ATTRIBUTE: string
                    public static RMI_SERVER_SOCKET_FACTORY_ATTRIBUTE: string
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
                class RMIIIOPServerImpl extends javax.management.remote.rmi.RMIServerImpl {
                    public constructor(arg0: java.util.Map<java.lang.String, any>)
                    protected export(): void
                    protected getProtocol(): string
                    public toStub(): java.rmi.Remote
                    protected makeClient(arg0: java.lang.String | string, arg1: javax.security.auth.Subject): javax.management.remote.rmi.RMIConnection
                    protected closeClient(arg0: javax.management.remote.rmi.RMIConnection): void
                    protected closeServer(): void
                    public static class: java.lang.Class<any>
                }
                class RMIJRMPServerImpl extends javax.management.remote.rmi.RMIServerImpl {
                    public constructor(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda, arg3: java.util.Map<java.lang.String, any>)
                    protected export(): void
                    protected getProtocol(): string
                    public toStub(): java.rmi.Remote
                    protected makeClient(arg0: java.lang.String | string, arg1: javax.security.auth.Subject): javax.management.remote.rmi.RMIConnection
                    protected closeClient(arg0: javax.management.remote.rmi.RMIConnection): void
                    protected closeServer(): void
                    public static class: java.lang.Class<any>
                }
                interface RMIServer extends java.rmi.Remote {
                    getVersion(): string
                    newClient(arg0: java.lang.Object): javax.management.remote.rmi.RMIConnection
                }
                abstract class RMIServerImpl implements java.io.Closeable , javax.management.remote.rmi.RMIServer {
                    public constructor(arg0: java.util.Map<java.lang.String, any>)
                    protected export(): void
                    public toStub(): java.rmi.Remote
                    public setDefaultClassLoader(arg0: java.lang.ClassLoader): void
                    public getDefaultClassLoader(): java.lang.ClassLoader
                    public setMBeanServer(arg0: javax.management.MBeanServer): void
                    public getMBeanServer(): javax.management.MBeanServer
                    public getVersion(): string
                    public newClient(arg0: java.lang.Object): javax.management.remote.rmi.RMIConnection
                    protected makeClient(arg0: java.lang.String | string, arg1: javax.security.auth.Subject): javax.management.remote.rmi.RMIConnection
                    protected closeClient(arg0: javax.management.remote.rmi.RMIConnection): void
                    protected getProtocol(): string
                    protected clientClosed(arg0: javax.management.remote.rmi.RMIConnection): void
                    public close(): void
                    protected closeServer(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
