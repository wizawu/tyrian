declare namespace sun {
    namespace nio {
        namespace ch {
            namespace sctp {
class SctpChannelImpl extends com.sun.nio.sctp.SctpChannel implements sun.nio.ch.SelChImpl {
    public constructor(arg0: java.nio.channels.spi.SelectorProvider)
    public constructor(arg0: java.nio.channels.spi.SelectorProvider, arg1: java.io.FileDescriptor)
    public constructor(arg0: java.nio.channels.spi.SelectorProvider, arg1: java.io.FileDescriptor, arg2: com.sun.nio.sctp.Association)
    public bind(arg0: java.net.SocketAddress): com.sun.nio.sctp.SctpChannel
    public bindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpChannel
    public unbindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpChannel
    public association(): com.sun.nio.sctp.Association
    public connect(arg0: java.net.SocketAddress): boolean
    public connect(arg0: java.net.SocketAddress, arg1: int, arg2: int): boolean
    public isConnectionPending(): boolean
    public finishConnect(): boolean
    protected implConfigureBlocking(arg0: boolean): void
    public implCloseSelectableChannel(): void
    public getFD(): java.io.FileDescriptor
    public getFDVal(): int
    public translateAndUpdateReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
    public translateAndSetReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
    public translateAndSetInterestOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): void
    public kill(): void
    public setOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>, arg1: T): com.sun.nio.sctp.SctpChannel
    public getOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>): T
    public supportedOptions<T>(): java.util.Set<com.sun.nio.sctp.SctpSocketOption<any>>
    public receive<T>(arg0: java.nio.ByteBuffer, arg1: T, arg2: com.sun.nio.sctp.NotificationHandler<T> | com.sun.nio.sctp.NotificationHandler$$Lambda<T>): com.sun.nio.sctp.MessageInfo
    public send<T>(arg0: java.nio.ByteBuffer, arg1: com.sun.nio.sctp.MessageInfo): int
    public shutdown<T>(): com.sun.nio.sctp.SctpChannel
    public getAllLocalAddresses<T>(): java.util.Set<java.net.SocketAddress>
    public getRemoteAddresses<T>(): java.util.Set<java.net.SocketAddress>
    public static class: java.lang.Class<any>
}

            }
        }
    }
}