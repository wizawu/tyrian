declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
                        class CorbaOutboundConnectionCacheImpl extends com.sun.corba.se.impl.transport.CorbaConnectionCacheBase implements com.sun.corba.se.pept.transport.OutboundConnectionCache {
                            protected connectionCache: java.util.Hashtable
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.pept.transport.ContactInfo)
                            public get(arg0: com.sun.corba.se.pept.transport.ContactInfo): com.sun.corba.se.pept.transport.Connection
                            public put(arg0: com.sun.corba.se.pept.transport.ContactInfo, arg1: com.sun.corba.se.pept.transport.Connection): void
                            public remove(arg0: com.sun.corba.se.pept.transport.ContactInfo): void
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