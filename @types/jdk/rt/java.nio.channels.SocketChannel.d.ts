declare namespace java {
    namespace nio {
        namespace channels {
            abstract class SocketChannel extends java.nio.channels.spi.AbstractSelectableChannel implements java.nio.channels.ByteChannel , java.nio.channels.ScatteringByteChannel , java.nio.channels.GatheringByteChannel , java.nio.channels.NetworkChannel {
                protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
                public static open(): java.nio.channels.SocketChannel
                public static open(arg0: java.net.SocketAddress): java.nio.channels.SocketChannel
                public validOps(): int
                public bind(arg0: java.net.SocketAddress): java.nio.channels.SocketChannel
                public setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.SocketChannel
                public shutdownInput(): java.nio.channels.SocketChannel
                public shutdownOutput(): java.nio.channels.SocketChannel
                public socket(): java.net.Socket
                public isConnected(): boolean
                public isConnectionPending(): boolean
                public connect(arg0: java.net.SocketAddress): boolean
                public finishConnect(): boolean
                public getRemoteAddress(): java.net.SocketAddress
                public read(arg0: java.nio.ByteBuffer): int
                public read(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                public read(arg0: java.nio.ByteBuffer[]): long
                public write(arg0: java.nio.ByteBuffer): int
                public write(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                public write(arg0: java.nio.ByteBuffer[]): long
                public getLocalAddress(): java.net.SocketAddress
                public setOption(arg0: java.net.SocketOption, arg1: java.lang.Object): java.nio.channels.NetworkChannel
                public bind(arg0: java.net.SocketAddress): java.nio.channels.NetworkChannel
                public static class: java.lang.Class<any>
            }
        }
    }
}