declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orbutil {
                        namespace threadpool {
                            interface ThreadPoolChooser {
                                getThreadPool(): com.sun.corba.se.spi.orbutil.threadpool.ThreadPool
                                getThreadPool(arg0: int): com.sun.corba.se.spi.orbutil.threadpool.ThreadPool
                                getThreadPoolIds(): java.lang.String[]
                            }
                        }
                    }
                }
            }
        }
    }
}