declare namespace java {
    namespace nio {
        namespace channels {
            namespace spi {
abstract class SelectorProvider {
    protected constructor()
    public static provider(): java.nio.channels.spi.SelectorProvider
    public openDatagramChannel(): java.nio.channels.DatagramChannel
    public openDatagramChannel(arg0: java.net.ProtocolFamily | java.net.ProtocolFamily$$Lambda): java.nio.channels.DatagramChannel
    public openPipe(): java.nio.channels.Pipe
    public openSelector(): java.nio.channels.spi.AbstractSelector
    public openServerSocketChannel(): java.nio.channels.ServerSocketChannel
    public openSocketChannel(): java.nio.channels.SocketChannel
    public inheritedChannel(): java.nio.channels.Channel
    public static class: java.lang.Class<any>
}

            }
        }
    }
}