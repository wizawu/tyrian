declare namespace sun {
    namespace nio {
        namespace ch {
            abstract class SelectorProviderImpl extends java.nio.channels.spi.SelectorProvider {
                public constructor()
                public openDatagramChannel(): java.nio.channels.DatagramChannel
                public openDatagramChannel(arg0: java.net.ProtocolFamily | java.net.ProtocolFamily$$Lambda): java.nio.channels.DatagramChannel
                public openPipe(): java.nio.channels.Pipe
                public openSelector(): java.nio.channels.spi.AbstractSelector
                public openServerSocketChannel(): java.nio.channels.ServerSocketChannel
                public openSocketChannel(): java.nio.channels.SocketChannel
                public static class: java.lang.Class<any>
            }
        }
    }
}