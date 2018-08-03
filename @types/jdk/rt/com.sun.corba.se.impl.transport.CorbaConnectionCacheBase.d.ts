declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
                        abstract class CorbaConnectionCacheBase implements com.sun.corba.se.pept.transport.ConnectionCache , com.sun.corba.se.spi.transport.CorbaConnectionCache {
                            protected orb: com.sun.corba.se.spi.orb.ORB
                            protected timestamp: long
                            protected cacheType: string
                            protected monitoringName: string
                            protected wrapper: com.sun.corba.se.impl.logging.ORBUtilSystemException
                            protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string, arg2: java.lang.String | string)
                            public getCacheType(): string
                            public stampTime(arg0: com.sun.corba.se.pept.transport.Connection): void
                            public numberOfConnections(): long
                            public close(): void
                            public numberOfIdleConnections(): long
                            public numberOfBusyConnections(): long
                            public reclaim(): boolean
                            public getMonitoringName(): string
                            public abstract values(): java.util.Collection
                            protected abstract backingStore(): java.lang.Object
                            protected abstract registerWithMonitoring(): void
                            protected dprintCreation(): void
                            protected dprintStatistics(): void
                            protected dprint(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}