declare namespace sun {
    namespace nio {
        namespace ch {
            abstract class AsynchronousSocketChannelImpl extends java.nio.channels.AsynchronousSocketChannel implements sun.nio.ch.Cancellable , sun.nio.ch.Groupable {
                protected fd: java.io.FileDescriptor
                protected stateLock: java.lang.Object
                protected localAddress: java.net.InetSocketAddress
                protected remoteAddress: java.net.InetSocketAddress
                protected state: int
                public isOpen(): boolean
                public close(): void
                public connect(arg0: java.net.SocketAddress): java.util.concurrent.Future<java.lang.Void>
                public connect<A>(arg0: java.net.SocketAddress, arg1: A, arg2: java.nio.channels.CompletionHandler<java.lang.Void, A>): void
                public read(arg0: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Integer>
                public read<A>(arg0: java.nio.ByteBuffer, arg1: long, arg2: java.util.concurrent.TimeUnit, arg3: A, arg4: java.nio.channels.CompletionHandler<java.lang.Integer, A>): void
                public read<A>(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int, arg3: long, arg4: java.util.concurrent.TimeUnit, arg5: A, arg6: java.nio.channels.CompletionHandler<java.lang.Long, A>): void
                public write(arg0: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Integer>
                public write<A>(arg0: java.nio.ByteBuffer, arg1: long, arg2: java.util.concurrent.TimeUnit, arg3: A, arg4: java.nio.channels.CompletionHandler<java.lang.Integer, A>): void
                public write<A>(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int, arg3: long, arg4: java.util.concurrent.TimeUnit, arg5: A, arg6: java.nio.channels.CompletionHandler<java.lang.Long, A>): void
                public bind(arg0: java.net.SocketAddress): java.nio.channels.AsynchronousSocketChannel
                public getLocalAddress(): java.net.SocketAddress
                public setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.AsynchronousSocketChannel
                public getOption<T>(arg0: java.net.SocketOption<T>): T
                public supportedOptions(): java.util.Set<java.net.SocketOption<any>>
                public getRemoteAddress(): java.net.SocketAddress
                public shutdownInput(): java.nio.channels.AsynchronousSocketChannel
                public shutdownOutput(): java.nio.channels.AsynchronousSocketChannel
                public toString(): string
                public setOption(arg0: java.net.SocketOption, arg1: java.lang.Object): java.nio.channels.NetworkChannel
                public bind(arg0: java.net.SocketAddress): java.nio.channels.NetworkChannel
                public static class: java.lang.Class<any>
            }
            abstract class AsynchronousSocketChannelImpl$$Lambda extends java.nio.channels.AsynchronousSocketChannel implements sun.nio.ch.Cancellable , sun.nio.ch.Groupable {
                protected fd: java.io.FileDescriptor
            }
        }
    }
}