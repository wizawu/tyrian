declare namespace sun {
    namespace nio {
        namespace ch {
            namespace sctp {
                class SctpMultiChannelImpl extends com.sun.nio.sctp.SctpMultiChannel implements sun.nio.ch.SelChImpl {
                    public constructor(arg0: java.nio.channels.spi.SelectorProvider)
                    public bind(arg0: java.net.SocketAddress, arg1: int): com.sun.nio.sctp.SctpMultiChannel
                    public bindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpMultiChannel
                    public unbindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpMultiChannel
                    public associations(): java.util.Set<com.sun.nio.sctp.Association>
                    protected implConfigureBlocking(arg0: boolean): void
                    public implCloseSelectableChannel(): void
                    public getFD(): java.io.FileDescriptor
                    public getFDVal(): int
                    public translateAndUpdateReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
                    public translateAndSetReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
                    public translateAndSetInterestOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): void
                    public kill(): void
                    public setOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>, arg1: T, arg2: com.sun.nio.sctp.Association): com.sun.nio.sctp.SctpMultiChannel
                    public getOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>, arg1: com.sun.nio.sctp.Association): T
                    public supportedOptions<T>(): java.util.Set<com.sun.nio.sctp.SctpSocketOption<any>>
                    public receive<T>(arg0: java.nio.ByteBuffer, arg1: T, arg2: com.sun.nio.sctp.NotificationHandler<T> | com.sun.nio.sctp.NotificationHandler$$Lambda<T>): com.sun.nio.sctp.MessageInfo
                    public send<T>(arg0: java.nio.ByteBuffer, arg1: com.sun.nio.sctp.MessageInfo): int
                    public shutdown<T>(arg0: com.sun.nio.sctp.Association): com.sun.nio.sctp.SctpMultiChannel
                    public getAllLocalAddresses<T>(): java.util.Set<java.net.SocketAddress>
                    public getRemoteAddresses<T>(arg0: com.sun.nio.sctp.Association): java.util.Set<java.net.SocketAddress>
                    public branch<T>(arg0: com.sun.nio.sctp.Association): com.sun.nio.sctp.SctpChannel
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}