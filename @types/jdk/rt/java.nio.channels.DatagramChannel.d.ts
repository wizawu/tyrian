declare namespace java {
    namespace nio {
        namespace channels {
            abstract class DatagramChannel extends java.nio.channels.spi.AbstractSelectableChannel implements java.nio.channels.ByteChannel , java.nio.channels.ScatteringByteChannel , java.nio.channels.GatheringByteChannel , java.nio.channels.MulticastChannel {
                protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
                public static open(): java.nio.channels.DatagramChannel
                public static open(arg0: java.net.ProtocolFamily | java.net.ProtocolFamily$$Lambda): java.nio.channels.DatagramChannel
                public validOps(): int
                public bind(arg0: java.net.SocketAddress): java.nio.channels.DatagramChannel
                public setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.DatagramChannel
                public socket(): java.net.DatagramSocket
                public isConnected(): boolean
                public connect(arg0: java.net.SocketAddress): java.nio.channels.DatagramChannel
                public disconnect(): java.nio.channels.DatagramChannel
                public getRemoteAddress(): java.net.SocketAddress
                public receive(arg0: java.nio.ByteBuffer): java.net.SocketAddress
                public send(arg0: java.nio.ByteBuffer, arg1: java.net.SocketAddress): int
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