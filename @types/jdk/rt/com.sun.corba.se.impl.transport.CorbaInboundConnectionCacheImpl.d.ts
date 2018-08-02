declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
                        class CorbaInboundConnectionCacheImpl extends com.sun.corba.se.impl.transport.CorbaConnectionCacheBase implements com.sun.corba.se.pept.transport.InboundConnectionCache {
                            protected connectionCache: java.util.Collection
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.pept.transport.Acceptor)
                            public close(): void
                            public get(arg0: com.sun.corba.se.pept.transport.Acceptor): com.sun.corba.se.pept.transport.Connection
                            public getAcceptor(): com.sun.corba.se.pept.transport.Acceptor
                            public put(arg0: com.sun.corba.se.pept.transport.Acceptor, arg1: com.sun.corba.se.pept.transport.Connection): void
                            public remove(arg0: com.sun.corba.se.pept.transport.Connection): void
                            public values(): java.util.Collection
                            protected backingStore(): java.lang.Object
                            protected registerWithMonitoring(): void
                            protected dprint(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}