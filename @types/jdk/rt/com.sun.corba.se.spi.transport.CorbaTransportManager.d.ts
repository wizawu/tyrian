declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace transport {
                        interface CorbaTransportManager extends com.sun.corba.se.pept.transport.TransportManager {
                            SOCKET_OR_CHANNEL_CONNECTION_CACHE: string
                            getAcceptors(arg0: java.lang.String | string, arg1: com.sun.corba.se.spi.ior.ObjectAdapterId): java.util.Collection
                            addToIORTemplate(arg0: com.sun.corba.se.spi.ior.IORTemplate, arg1: com.sun.corba.se.impl.oa.poa.Policies, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: com.sun.corba.se.spi.ior.ObjectAdapterId): void
                        }
                    }
                }
            }
        }
    }
}