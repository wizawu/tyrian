declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
                        class ReaderThreadImpl implements com.sun.corba.se.pept.transport.ReaderThread , com.sun.corba.se.spi.orbutil.threadpool.Work {
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.pept.transport.Connection, arg2: com.sun.corba.se.pept.transport.Selector)
                            public getConnection(): com.sun.corba.se.pept.transport.Connection
                            public close(): void
                            public doWork(): void
                            public setEnqueueTime(arg0: long): void
                            public getEnqueueTime(): long
                            public getName(): string
                            protected dprint(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}