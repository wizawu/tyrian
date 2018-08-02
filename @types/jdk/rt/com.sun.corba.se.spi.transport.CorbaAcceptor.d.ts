declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace transport {
interface CorbaAcceptor extends com.sun.corba.se.pept.transport.Acceptor {
    getObjectAdapterId(): string
    getObjectAdapterManagerId(): string
    addToIORTemplate(arg0: com.sun.corba.se.spi.ior.IORTemplate, arg1: com.sun.corba.se.impl.oa.poa.Policies, arg2: java.lang.String | string): void
    getMonitoringName(): string
}

                    }
                }
            }
        }
    }
}