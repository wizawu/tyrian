declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace transport {
                        interface OutboundConnectionCache extends com.sun.corba.se.pept.transport.ConnectionCache {
                            get(arg0: com.sun.corba.se.pept.transport.ContactInfo): com.sun.corba.se.pept.transport.Connection
                            put(arg0: com.sun.corba.se.pept.transport.ContactInfo, arg1: com.sun.corba.se.pept.transport.Connection): void
                            remove(arg0: com.sun.corba.se.pept.transport.ContactInfo): void
                        }
                    }
                }
            }
        }
    }
}