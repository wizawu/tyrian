declare namespace java {
    namespace nio {
        namespace channels {
            interface NetworkChannel extends java.nio.channels.Channel {
                bind(arg0: java.net.SocketAddress): java.nio.channels.NetworkChannel
                getLocalAddress(): java.net.SocketAddress
                setOption<T>(arg0: java.net.SocketOption<T>, arg1: T): java.nio.channels.NetworkChannel
                getOption<T>(arg0: java.net.SocketOption<T>): T
                supportedOptions<T>(): java.util.Set<java.net.SocketOption<any>>
            }
        }
    }
}