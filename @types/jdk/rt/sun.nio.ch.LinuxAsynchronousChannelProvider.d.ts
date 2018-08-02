declare namespace sun {
    namespace nio {
        namespace ch {
            class LinuxAsynchronousChannelProvider extends java.nio.channels.spi.AsynchronousChannelProvider {
                public constructor()
                public openAsynchronousChannelGroup(arg0: int, arg1: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$Lambda): java.nio.channels.AsynchronousChannelGroup
                public openAsynchronousChannelGroup(arg0: java.util.concurrent.ExecutorService, arg1: int): java.nio.channels.AsynchronousChannelGroup
                public openAsynchronousServerSocketChannel(arg0: java.nio.channels.AsynchronousChannelGroup): java.nio.channels.AsynchronousServerSocketChannel
                public openAsynchronousSocketChannel(arg0: java.nio.channels.AsynchronousChannelGroup): java.nio.channels.AsynchronousSocketChannel
                public static class: java.lang.Class<any>
            }
        }
    }
}