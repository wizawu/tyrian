declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orbutil {
                        namespace threadpool {
                            interface WorkQueue {
                                addWork(arg0: com.sun.corba.se.spi.orbutil.threadpool.Work): void
                                getName(): string
                                totalWorkItemsAdded(): long
                                workItemsInQueue(): int
                                averageTimeInQueue(): long
                                setThreadPool(arg0: com.sun.corba.se.spi.orbutil.threadpool.ThreadPool): void
                                getThreadPool(): com.sun.corba.se.spi.orbutil.threadpool.ThreadPool
                            }
                        }
                    }
                }
            }
        }
    }
}