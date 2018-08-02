declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
                        class CorbaTransportManagerImpl implements com.sun.corba.se.spi.transport.CorbaTransportManager {
                            protected orb: com.sun.corba.se.spi.orb.ORB
                            protected acceptors: java.util.List
                            protected outboundConnectionCaches: java.util.Map
                            protected inboundConnectionCaches: java.util.Map
                            protected selector: com.sun.corba.se.pept.transport.Selector
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                            public getByteBufferPool(arg0: int): com.sun.corba.se.pept.transport.ByteBufferPool
                            public getOutboundConnectionCache(arg0: com.sun.corba.se.pept.transport.ContactInfo): com.sun.corba.se.pept.transport.OutboundConnectionCache
                            public getOutboundConnectionCaches(): java.util.Collection
                            public getInboundConnectionCache(arg0: com.sun.corba.se.pept.transport.Acceptor): com.sun.corba.se.pept.transport.InboundConnectionCache
                            public getInboundConnectionCaches(): java.util.Collection
                            public getSelector(arg0: int): com.sun.corba.se.pept.transport.Selector
                            public registerAcceptor(arg0: com.sun.corba.se.pept.transport.Acceptor): void
                            public getAcceptors(): java.util.Collection
                            public unregisterAcceptor(arg0: com.sun.corba.se.pept.transport.Acceptor): void
                            public close(): void
                            public getAcceptors(arg0: java.lang.String | string, arg1: com.sun.corba.se.spi.ior.ObjectAdapterId): java.util.Collection
                            public addToIORTemplate(arg0: com.sun.corba.se.spi.ior.IORTemplate, arg1: com.sun.corba.se.impl.oa.poa.Policies, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: com.sun.corba.se.spi.ior.ObjectAdapterId): void
                            protected dprint(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}