declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace broker {
                        interface Broker {
                            createOrIncrementInvocationInfo(): com.sun.corba.se.pept.protocol.ClientInvocationInfo
                            getInvocationInfo(): com.sun.corba.se.pept.protocol.ClientInvocationInfo
                            releaseOrDecrementInvocationInfo(): void
                            getTransportManager(): com.sun.corba.se.pept.transport.TransportManager
                        }
                    }
                }
            }
        }
    }
}