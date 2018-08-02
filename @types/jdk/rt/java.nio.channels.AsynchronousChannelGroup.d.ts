declare namespace java {
    namespace nio {
        namespace channels {
            abstract class AsynchronousChannelGroup {
                protected constructor(arg0: java.nio.channels.spi.AsynchronousChannelProvider)
                public provider(): java.nio.channels.spi.AsynchronousChannelProvider
                public static withFixedThreadPool(arg0: int, arg1: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$Lambda): java.nio.channels.AsynchronousChannelGroup
                public static withCachedThreadPool(arg0: java.util.concurrent.ExecutorService, arg1: int): java.nio.channels.AsynchronousChannelGroup
                public static withThreadPool(arg0: java.util.concurrent.ExecutorService): java.nio.channels.AsynchronousChannelGroup
                public isShutdown(): boolean
                public isTerminated(): boolean
                public shutdown(): void
                public shutdownNow(): void
                public awaitTermination(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}