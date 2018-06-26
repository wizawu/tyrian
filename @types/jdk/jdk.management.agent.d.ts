declare namespace sun {
    namespace management {
        namespace jdp {
            class JdpBroadcaster {
                public constructor(arg0: java.net.InetAddress, arg1: java.net.InetAddress, arg2: int, arg3: int)
                public constructor(arg0: java.net.InetAddress, arg1: int, arg2: int)
                public sendPacket(arg0: sun.management.jdp.JdpPacket | sun.management.jdp.JdpPacket$$Lambda): void
                public shutdown(): void
                public static class: java.lang.Class<any>
            }
            class JdpController {
                public static startDiscoveryService(arg0: java.net.InetAddress, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                public static stopDiscoveryService(): void
                public static class: java.lang.Class<any>
            }
            class JdpException extends java.lang.Exception {
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            abstract class JdpGenericPacket implements sun.management.jdp.JdpPacket {
                protected constructor()
                public static checkMagic(arg0: int): void
                public static checkVersion(arg0: short): void
                public static getMagic(): int
                public static getVersion(): short
                public static class: java.lang.Class<any>
            }
            abstract class JdpGenericPacket$$Lambda implements sun.management.jdp.JdpPacket {
                protected constructor()
            }
            class JdpJmxPacket extends sun.management.jdp.JdpGenericPacket implements sun.management.jdp.JdpPacket {
                public static UUID_KEY: string
                public static MAIN_CLASS_KEY: string
                public static JMX_SERVICE_URL_KEY: string
                public static INSTANCE_NAME_KEY: string
                public static PROCESS_ID_KEY: string
                public static RMI_HOSTNAME_KEY: string
                public static BROADCAST_INTERVAL_KEY: string
                public constructor(arg0: java.util.UUID, arg1: java.lang.String | string)
                public constructor(arg0: byte[])
                public setMainClass(arg0: java.lang.String | string): void
                public setInstanceName(arg0: java.lang.String | string): void
                public getId(): java.util.UUID
                public getMainClass(): string
                public getJmxServiceUrl(): string
                public getInstanceName(): string
                public getProcessId(): string
                public setProcessId(arg0: java.lang.String | string): void
                public getRmiHostname(): string
                public setRmiHostname(arg0: java.lang.String | string): void
                public getBroadcastInterval(): string
                public setBroadcastInterval(arg0: java.lang.String | string): void
                public getPacketData(): byte[]
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
            class JdpJmxPacket$$Lambda extends sun.management.jdp.JdpGenericPacket implements sun.management.jdp.JdpPacket {
                public static UUID_KEY: string
            }
            interface JdpPacket {
                getPacketData(): byte[]
            }
            interface JdpPacket$$Lambda {
                (): byte[]
            }
            class JdpPacketReader {
                public constructor(arg0: byte[])
                public getEntry(): string
                public getDiscoveryDataAsMap(): java.util.Map<java.lang.String, java.lang.String>
                public static class: java.lang.Class<any>
            }
            class JdpPacketWriter {
                public constructor()
                public addEntry(arg0: java.lang.String | string): void
                public addEntry(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public getPacketBytes(): byte[]
                public static class: java.lang.Class<any>
            }
        }
        namespace jmxremote {
            class ConnectorBootstrap {
                public static unexportRegistry(): void
                public static initialize(): javax.management.remote.JMXConnectorServer
                public static initialize(arg0: java.lang.String | string, arg1: java.util.Properties): javax.management.remote.JMXConnectorServer
                public static startRemoteConnectorServer(arg0: java.lang.String | string, arg1: java.util.Properties): javax.management.remote.JMXConnectorServer
                public static startLocalConnectorServer(): javax.management.remote.JMXConnectorServer
                public static class: java.lang.Class<any>
            }
            class LocalRMIServerSocketFactory implements java.rmi.server.RMIServerSocketFactory {
                public constructor()
                public createServerSocket(arg0: int): java.net.ServerSocket
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            class LocalRMIServerSocketFactory$$Lambda implements java.rmi.server.RMIServerSocketFactory {
                public constructor()
            }
            class SingleEntryRegistry extends sun.rmi.registry.RegistryImpl {
                public list(): java.lang.String[]
                public lookup(arg0: java.lang.String | string): java.rmi.Remote
                public bind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
                public rebind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
                public unbind(arg0: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
        }
    }
}
