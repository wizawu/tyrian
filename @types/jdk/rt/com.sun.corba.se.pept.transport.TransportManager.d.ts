declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace transport {
interface TransportManager {
    getByteBufferPool(arg0: int): com.sun.corba.se.pept.transport.ByteBufferPool
    getOutboundConnectionCache(arg0: com.sun.corba.se.pept.transport.ContactInfo): com.sun.corba.se.pept.transport.OutboundConnectionCache
    getOutboundConnectionCaches(): java.util.Collection
    getInboundConnectionCache(arg0: com.sun.corba.se.pept.transport.Acceptor): com.sun.corba.se.pept.transport.InboundConnectionCache
    getInboundConnectionCaches(): java.util.Collection
    getSelector(arg0: int): com.sun.corba.se.pept.transport.Selector
    registerAcceptor(arg0: com.sun.corba.se.pept.transport.Acceptor): void
    getAcceptors(): java.util.Collection
    unregisterAcceptor(arg0: com.sun.corba.se.pept.transport.Acceptor): void
    close(): void
}

                    }
                }
            }
        }
    }
}