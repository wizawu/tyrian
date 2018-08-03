declare namespace java {
    namespace nio {
        namespace channels {
            abstract class SocketChannel extends java.nio.channels.spi.AbstractSelectableChannel implements java.nio.channels.ByteChannel , java.nio.channels.ScatteringByteChannel , java.nio.channels.GatheringByteChannel , java.nio.channels.NetworkChannel {
                protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
                public static open(): java.nio.channels.SocketChannel
                public static open(arg0: java.net.SocketAddress): java.nio.channels.SocketChannel
                public validOps(): int
                public abstract bind(arg0: java.net.SocketAddress): java.nio.channels.SocketChannel
                public abstract setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.SocketChannel
                public abstract shutdownInput<T>(): java.nio.channels.SocketChannel
                public abstract shutdownOutput<T>(): java.nio.channels.SocketChannel
                public abstract socket<T>(): java.net.Socket
                public abstract isConnected<T>(): boolean
                public abstract isConnectionPending<T>(): boolean
                public abstract connect<T>(arg0: java.net.SocketAddress): boolean
                public abstract finishConnect<T>(): boolean
                public abstract getRemoteAddress<T>(): java.net.SocketAddress
                public abstract read<T>(arg0: java.nio.ByteBuffer): int
                public abstract read<T>(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                public read<T>(arg0: java.nio.ByteBuffer[]): long
                public abstract write<T>(arg0: java.nio.ByteBuffer): int
                public abstract write<T>(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                public write<T>(arg0: java.nio.ByteBuffer[]): long
                public abstract getLocalAddress<T>(): java.net.SocketAddress
                public setOption<T>(arg0: java.net.SocketOption, arg1: java.lang.Object): java.nio.channels.NetworkChannel
                public bind<T>(arg0: java.net.SocketAddress): java.nio.channels.NetworkChannel
                public static class: java.lang.Class<any>
            }
        }
    }
}