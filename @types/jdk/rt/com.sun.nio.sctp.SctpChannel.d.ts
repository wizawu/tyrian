declare namespace com {
    namespace sun {
        namespace nio {
            namespace sctp {
abstract class SctpChannel extends java.nio.channels.spi.AbstractSelectableChannel {
    protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
    public static open(): com.sun.nio.sctp.SctpChannel
    public static open(arg0: java.net.SocketAddress, arg1: int, arg2: int): com.sun.nio.sctp.SctpChannel
    public association(): com.sun.nio.sctp.Association
    public bind(arg0: java.net.SocketAddress): com.sun.nio.sctp.SctpChannel
    public bindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpChannel
    public unbindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpChannel
    public connect(arg0: java.net.SocketAddress): boolean
    public connect(arg0: java.net.SocketAddress, arg1: int, arg2: int): boolean
    public isConnectionPending(): boolean
    public finishConnect(): boolean
    public getAllLocalAddresses(): java.util.Set<java.net.SocketAddress>
    public getRemoteAddresses(): java.util.Set<java.net.SocketAddress>
    public shutdown(): com.sun.nio.sctp.SctpChannel
    public getOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>): T
    public setOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>, arg1: T): com.sun.nio.sctp.SctpChannel
    public supportedOptions(): java.util.Set<com.sun.nio.sctp.SctpSocketOption<any>>
    public validOps(): int
    public receive<T>(arg0: java.nio.ByteBuffer, arg1: T, arg2: com.sun.nio.sctp.NotificationHandler<T> | com.sun.nio.sctp.NotificationHandler$$Lambda<T>): com.sun.nio.sctp.MessageInfo
    public send(arg0: java.nio.ByteBuffer, arg1: com.sun.nio.sctp.MessageInfo): int
    public static class: java.lang.Class<any>
}

            }
        }
    }
}