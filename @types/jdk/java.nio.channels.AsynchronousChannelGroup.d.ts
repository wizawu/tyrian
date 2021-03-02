declare namespace java {
  namespace nio {
    namespace channels {

      abstract class AsynchronousChannelGroup {
        protected constructor(arg0: java.nio.channels.spi.AsynchronousChannelProvider)
        public provider(): java.nio.channels.spi.AsynchronousChannelProvider
        public static withFixedThreadPool(arg0: int, arg1: java.util.concurrent.ThreadFactory): java.nio.channels.AsynchronousChannelGroup
        public static withCachedThreadPool(arg0: java.util.concurrent.ExecutorService, arg1: int): java.nio.channels.AsynchronousChannelGroup
        public static withThreadPool(arg0: java.util.concurrent.ExecutorService): java.nio.channels.AsynchronousChannelGroup
        public abstract isShutdown(): boolean
        public abstract isTerminated(): boolean
        public abstract shutdown(): void
        public abstract shutdownNow(): void
        public abstract awaitTermination(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
      }

    }
  }
}
