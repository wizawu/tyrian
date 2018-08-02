declare namespace com {
    namespace sun {
        namespace nio {
            namespace sctp {
abstract class SctpMultiChannel extends java.nio.channels.spi.AbstractSelectableChannel {
    protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
    public static open(): com.sun.nio.sctp.SctpMultiChannel
    public associations(): java.util.Set<com.sun.nio.sctp.Association>
    public bind(arg0: java.net.SocketAddress, arg1: int): com.sun.nio.sctp.SctpMultiChannel
    public bind(arg0: java.net.SocketAddress): com.sun.nio.sctp.SctpMultiChannel
    public bindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpMultiChannel
    public unbindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpMultiChannel
    public getAllLocalAddresses(): java.util.Set<java.net.SocketAddress>
    public getRemoteAddresses(arg0: com.sun.nio.sctp.Association): java.util.Set<java.net.SocketAddress>
    public shutdown(arg0: com.sun.nio.sctp.Association): com.sun.nio.sctp.SctpMultiChannel
    public getOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>, arg1: com.sun.nio.sctp.Association): T
    public setOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>, arg1: T, arg2: com.sun.nio.sctp.Association): com.sun.nio.sctp.SctpMultiChannel
    public supportedOptions(): java.util.Set<com.sun.nio.sctp.SctpSocketOption<any>>
    public validOps(): int
    public receive<T>(arg0: java.nio.ByteBuffer, arg1: T, arg2: com.sun.nio.sctp.NotificationHandler<T> | com.sun.nio.sctp.NotificationHandler$$Lambda<T>): com.sun.nio.sctp.MessageInfo
    public send(arg0: java.nio.ByteBuffer, arg1: com.sun.nio.sctp.MessageInfo): int
    public branch(arg0: com.sun.nio.sctp.Association): com.sun.nio.sctp.SctpChannel
    public static class: java.lang.Class<any>
}

            }
        }
    }
}