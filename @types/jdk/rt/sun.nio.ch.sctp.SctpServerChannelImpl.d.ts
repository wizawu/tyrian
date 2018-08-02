declare namespace sun {
    namespace nio {
        namespace ch {
            namespace sctp {
                class SctpServerChannelImpl extends com.sun.nio.sctp.SctpServerChannel implements sun.nio.ch.SelChImpl {
                    public constructor(arg0: java.nio.channels.spi.SelectorProvider)
                    public bind(arg0: java.net.SocketAddress, arg1: int): com.sun.nio.sctp.SctpServerChannel
                    public bindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpServerChannel
                    public unbindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpServerChannel
                    public accept(): com.sun.nio.sctp.SctpChannel
                    protected implConfigureBlocking(arg0: boolean): void
                    public implCloseSelectableChannel(): void
                    public kill(): void
                    public getFD(): java.io.FileDescriptor
                    public getFDVal(): int
                    public translateAndUpdateReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
                    public translateAndSetReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
                    public translateAndSetInterestOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): void
                    public setOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>, arg1: T): com.sun.nio.sctp.SctpServerChannel
                    public getOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>): T
                    public supportedOptions<T>(): java.util.Set<com.sun.nio.sctp.SctpSocketOption<any>>
                    public getAllLocalAddresses<T>(): java.util.Set<java.net.SocketAddress>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}