declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace protocol {
                        interface RequestDispatcherRegistry {
                            registerClientRequestDispatcher(arg0: com.sun.corba.se.pept.protocol.ClientRequestDispatcher, arg1: int): void
                            getClientRequestDispatcher(arg0: int): com.sun.corba.se.pept.protocol.ClientRequestDispatcher
                            registerLocalClientRequestDispatcherFactory(arg0: com.sun.corba.se.spi.protocol.LocalClientRequestDispatcherFactory | com.sun.corba.se.spi.protocol.LocalClientRequestDispatcherFactory$$Lambda, arg1: int): void
                            getLocalClientRequestDispatcherFactory(arg0: int): com.sun.corba.se.spi.protocol.LocalClientRequestDispatcherFactory
                            registerServerRequestDispatcher(arg0: com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher | com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher$$Lambda, arg1: int): void
                            getServerRequestDispatcher(arg0: int): com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher
                            registerServerRequestDispatcher(arg0: com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher | com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher$$Lambda, arg1: java.lang.String | string): void
                            getServerRequestDispatcher(arg0: java.lang.String | string): com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher
                            registerObjectAdapterFactory(arg0: com.sun.corba.se.spi.oa.ObjectAdapterFactory, arg1: int): void
                            getObjectAdapterFactory(arg0: int): com.sun.corba.se.spi.oa.ObjectAdapterFactory
                            getObjectAdapterFactories(): java.util.Set<com.sun.corba.se.spi.oa.ObjectAdapterFactory>
                        }
                    }
                }
            }
        }
    }
}