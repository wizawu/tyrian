declare namespace java {
    namespace nio {
        namespace channels {
            abstract class DatagramChannel extends java.nio.channels.spi.AbstractSelectableChannel implements java.nio.channels.ByteChannel , java.nio.channels.ScatteringByteChannel , java.nio.channels.GatheringByteChannel , java.nio.channels.MulticastChannel {
                protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
                public static open(): java.nio.channels.DatagramChannel
                public static open(arg0: java.net.ProtocolFamily | java.net.ProtocolFamily$$Lambda): java.nio.channels.DatagramChannel
                public validOps(): int
                public abstract bind(arg0: java.net.SocketAddress): java.nio.channels.DatagramChannel
                public abstract setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.DatagramChannel
                public abstract socket<T>(): java.net.DatagramSocket
                public abstract isConnected<T>(): boolean
                public abstract connect<T>(arg0: java.net.SocketAddress): java.nio.channels.DatagramChannel
                public abstract disconnect<T>(): java.nio.channels.DatagramChannel
                public abstract getRemoteAddress<T>(): java.net.SocketAddress
                public abstract receive<T>(arg0: java.nio.ByteBuffer): java.net.SocketAddress
                public abstract send<T>(arg0: java.nio.ByteBuffer, arg1: java.net.SocketAddress): int
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