declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace transport {
                        interface InboundConnectionCache extends com.sun.corba.se.pept.transport.ConnectionCache {
                            get(arg0: com.sun.corba.se.pept.transport.Acceptor): com.sun.corba.se.pept.transport.Connection
                            put(arg0: com.sun.corba.se.pept.transport.Acceptor, arg1: com.sun.corba.se.pept.transport.Connection): void
                            remove(arg0: com.sun.corba.se.pept.transport.Connection): void
                            getAcceptor(): com.sun.corba.se.pept.transport.Acceptor
                        }
                    }
                }
            }
        }
    }
}