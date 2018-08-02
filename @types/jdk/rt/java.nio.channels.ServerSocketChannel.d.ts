declare namespace java {
    namespace nio {
        namespace channels {
abstract class ServerSocketChannel extends java.nio.channels.spi.AbstractSelectableChannel implements java.nio.channels.NetworkChannel {
    protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
    public static open(): java.nio.channels.ServerSocketChannel
    public validOps(): int
    public bind(arg0: java.net.SocketAddress): java.nio.channels.ServerSocketChannel
    public bind(arg0: java.net.SocketAddress, arg1: int): java.nio.channels.ServerSocketChannel
    public setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.ServerSocketChannel
    public socket(): java.net.ServerSocket
    public accept(): java.nio.channels.SocketChannel
    public getLocalAddress(): java.net.SocketAddress
    public setOption(arg0: java.net.SocketOption, arg1: java.lang.Object): java.nio.channels.NetworkChannel
    public bind(arg0: java.net.SocketAddress): java.nio.channels.NetworkChannel
    public static class: java.lang.Class<any>
}

        }
    }
}