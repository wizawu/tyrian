declare namespace java {
  namespace nio {
    namespace channels {
      abstract class AsynchronousChannelGroup {
        protected constructor(arg0: java.nio.channels.spi.AsynchronousChannelProvider)
        public provider(): java.nio.channels.spi.AsynchronousChannelProvider
        public static withFixedThreadPool(
          arg0: number | java.lang.Integer,
          arg1: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$lambda
        ): java.nio.channels.AsynchronousChannelGroup
        public static withCachedThreadPool(
          arg0: java.util.concurrent.ExecutorService,
          arg1: number | java.lang.Integer
        ): java.nio.channels.AsynchronousChannelGroup
        public static withThreadPool(
          arg0: java.util.concurrent.ExecutorService
        ): java.nio.channels.AsynchronousChannelGroup
        public abstract isShutdown(): boolean
        public abstract isTerminated(): boolean
        public abstract shutdown(): void
        public abstract shutdownNow(): void
        public abstract awaitTermination(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): boolean
      }
    }
  }
}
