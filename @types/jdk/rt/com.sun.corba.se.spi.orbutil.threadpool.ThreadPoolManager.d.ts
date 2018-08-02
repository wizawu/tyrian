declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orbutil {
                        namespace threadpool {
interface ThreadPoolManager extends java.io.Closeable {
    getThreadPool(arg0: java.lang.String | string): com.sun.corba.se.spi.orbutil.threadpool.ThreadPool
    getThreadPool(arg0: int): com.sun.corba.se.spi.orbutil.threadpool.ThreadPool
    getThreadPoolNumericId(arg0: java.lang.String | string): int
    getThreadPoolStringId(arg0: int): string
    getDefaultThreadPool(): com.sun.corba.se.spi.orbutil.threadpool.ThreadPool
    getThreadPoolChooser(arg0: java.lang.String | string): com.sun.corba.se.spi.orbutil.threadpool.ThreadPoolChooser
    getThreadPoolChooser(arg0: int): com.sun.corba.se.spi.orbutil.threadpool.ThreadPoolChooser
    setThreadPoolChooser(arg0: java.lang.String | string, arg1: com.sun.corba.se.spi.orbutil.threadpool.ThreadPoolChooser): void
    getThreadPoolChooserNumericId(arg0: java.lang.String | string): int
}

                        }
                    }
                }
            }
        }
    }
}