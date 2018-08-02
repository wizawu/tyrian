declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
                        namespace threadpool {
class WorkQueueImpl implements com.sun.corba.se.spi.orbutil.threadpool.WorkQueue {
    public constructor()
    public constructor(arg0: com.sun.corba.se.spi.orbutil.threadpool.ThreadPool)
    public constructor(arg0: com.sun.corba.se.spi.orbutil.threadpool.ThreadPool, arg1: java.lang.String | string)
    public addWork(arg0: com.sun.corba.se.spi.orbutil.threadpool.Work): void
    public setThreadPool(arg0: com.sun.corba.se.spi.orbutil.threadpool.ThreadPool): void
    public getThreadPool(): com.sun.corba.se.spi.orbutil.threadpool.ThreadPool
    public totalWorkItemsAdded(): long
    public workItemsInQueue(): int
    public averageTimeInQueue(): long
    public getName(): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}