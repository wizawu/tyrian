declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orbutil {
                        namespace threadpool {
interface ThreadPool extends java.io.Closeable {
    getAnyWorkQueue(): com.sun.corba.se.spi.orbutil.threadpool.WorkQueue
    getWorkQueue(arg0: int): com.sun.corba.se.spi.orbutil.threadpool.WorkQueue
    numberOfWorkQueues(): int
    minimumNumberOfThreads(): int
    maximumNumberOfThreads(): int
    idleTimeoutForThreads(): long
    currentNumberOfThreads(): int
    numberOfAvailableThreads(): int
    numberOfBusyThreads(): int
    currentProcessedCount(): long
    averageWorkCompletionTime(): long
    getName(): string
}

                        }
                    }
                }
            }
        }
    }
}