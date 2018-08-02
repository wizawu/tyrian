declare namespace sun {
    namespace rmi {
        namespace transport {
            namespace tcp {
class TCPEndpoint implements sun.rmi.transport.Endpoint {
    public constructor(arg0: java.lang.String | string, arg1: int)
    public constructor(arg0: java.lang.String | string, arg1: int, arg2: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg3: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda)
    public static getLocalEndpoint(arg0: int): sun.rmi.transport.tcp.TCPEndpoint
    public static getLocalEndpoint(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda): sun.rmi.transport.tcp.TCPEndpoint
    public getOutboundTransport(): sun.rmi.transport.Transport
    public static shedConnectionCaches(): void
    public exportObject(arg0: sun.rmi.transport.Target): void
    public getChannel(): sun.rmi.transport.Channel
    public getHost(): string
    public getPort(): int
    public getListenPort(): int
    public getInboundTransport(): sun.rmi.transport.Transport
    public getClientSocketFactory(): java.rmi.server.RMIClientSocketFactory
    public getServerSocketFactory(): java.rmi.server.RMIServerSocketFactory
    public toString(): string
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public write(arg0: java.io.ObjectOutput): void
    public static read(arg0: java.io.ObjectInput): sun.rmi.transport.tcp.TCPEndpoint
    public writeHostPortFormat(arg0: java.io.DataOutput): void
    public static readHostPortFormat(arg0: java.io.DataInput): sun.rmi.transport.tcp.TCPEndpoint
    public static class: java.lang.Class<any>
}

            }
        }
    }
}