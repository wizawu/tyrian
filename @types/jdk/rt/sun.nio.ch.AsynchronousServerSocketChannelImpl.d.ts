declare namespace sun {
    namespace nio {
        namespace ch {
            abstract class AsynchronousServerSocketChannelImpl extends java.nio.channels.AsynchronousServerSocketChannel implements sun.nio.ch.Cancellable , sun.nio.ch.Groupable {
                protected readonly fd: java.io.FileDescriptor
                protected localAddress: java.net.InetSocketAddress
                public isOpen(): boolean
                public close(): void
                public accept(): java.util.concurrent.Future<java.nio.channels.AsynchronousSocketChannel>
                public accept<A>(arg0: A, arg1: java.nio.channels.CompletionHandler<java.nio.channels.AsynchronousSocketChannel, A>): void
                public onCancel<A>(arg0: sun.nio.ch.PendingFuture<any, any>): void
                public bind<A>(arg0: java.net.SocketAddress, arg1: int): java.nio.channels.AsynchronousServerSocketChannel
                public getLocalAddress<A>(): java.net.SocketAddress
                public setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.AsynchronousServerSocketChannel
                public getOption<T>(arg0: java.net.SocketOption<T>): T
                public supportedOptions<T>(): java.util.Set<java.net.SocketOption<any>>
                public toString<T>(): string
                public setOption<T>(arg0: java.net.SocketOption, arg1: java.lang.Object): java.nio.channels.NetworkChannel
                public static class: java.lang.Class<any>
            }
        }
    }
}