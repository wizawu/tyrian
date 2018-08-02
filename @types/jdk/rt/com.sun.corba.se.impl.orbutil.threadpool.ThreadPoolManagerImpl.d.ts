declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
                        namespace threadpool {
                            class ThreadPoolManagerImpl implements com.sun.corba.se.spi.orbutil.threadpool.ThreadPoolManager {
                                public constructor()
                                public close(): void
                                public getThreadPool(arg0: java.lang.String | string): com.sun.corba.se.spi.orbutil.threadpool.ThreadPool
                                public getThreadPool(arg0: int): com.sun.corba.se.spi.orbutil.threadpool.ThreadPool
                                public getThreadPoolNumericId(arg0: java.lang.String | string): int
                                public getThreadPoolStringId(arg0: int): string
                                public getDefaultThreadPool(): com.sun.corba.se.spi.orbutil.threadpool.ThreadPool
                                public getThreadPoolChooser(arg0: java.lang.String | string): com.sun.corba.se.spi.orbutil.threadpool.ThreadPoolChooser
                                public getThreadPoolChooser(arg0: int): com.sun.corba.se.spi.orbutil.threadpool.ThreadPoolChooser
                                public setThreadPoolChooser(arg0: java.lang.String | string, arg1: com.sun.corba.se.spi.orbutil.threadpool.ThreadPoolChooser): void
                                public getThreadPoolChooserNumericId(arg0: java.lang.String | string): int
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}