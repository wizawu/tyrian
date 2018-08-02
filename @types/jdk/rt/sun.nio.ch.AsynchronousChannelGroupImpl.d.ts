declare namespace sun {
    namespace nio {
        namespace ch {
            abstract class AsynchronousChannelGroupImpl extends java.nio.channels.AsynchronousChannelGroup implements java.util.concurrent.Executor {
                protected startThreads(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
                public isShutdown(): boolean
                public isTerminated(): boolean
                public shutdown(): void
                public shutdownNow(): void
                public awaitTermination(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
                public execute(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
                public static class: java.lang.Class<any>
            }
            abstract class AsynchronousChannelGroupImpl$$Lambda extends java.nio.channels.AsynchronousChannelGroup implements java.util.concurrent.Executor {
                protected (arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
            }
        }
    }
}