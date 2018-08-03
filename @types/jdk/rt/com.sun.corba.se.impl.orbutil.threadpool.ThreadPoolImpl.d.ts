declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
                        namespace threadpool {
                            class ThreadPoolImpl implements com.sun.corba.se.spi.orbutil.threadpool.ThreadPool {
                                public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.String | string)
                                public constructor(arg0: java.lang.String | string)
                                public constructor(arg0: int, arg1: int, arg2: long, arg3: java.lang.String | string)
                                public close(): void
                                public getAnyWorkQueue(): com.sun.corba.se.spi.orbutil.threadpool.WorkQueue
                                public getWorkQueue(arg0: int): com.sun.corba.se.spi.orbutil.threadpool.WorkQueue
                                public minimumNumberOfThreads(): int
                                public maximumNumberOfThreads(): int
                                public idleTimeoutForThreads(): long
                                public currentNumberOfThreads(): int
                                public numberOfAvailableThreads(): int
                                public numberOfBusyThreads(): int
                                public averageWorkCompletionTime(): long
                                public currentProcessedCount(): long
                                public getName(): string
                                public numberOfWorkQueues(): int
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}