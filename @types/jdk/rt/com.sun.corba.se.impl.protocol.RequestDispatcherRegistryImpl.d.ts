declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        class RequestDispatcherRegistryImpl implements com.sun.corba.se.spi.protocol.RequestDispatcherRegistry {
                            protected defaultId: int
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int)
                            public registerClientRequestDispatcher(arg0: com.sun.corba.se.pept.protocol.ClientRequestDispatcher, arg1: int): void
                            public registerLocalClientRequestDispatcherFactory(arg0: com.sun.corba.se.spi.protocol.LocalClientRequestDispatcherFactory | com.sun.corba.se.spi.protocol.LocalClientRequestDispatcherFactory$$Lambda, arg1: int): void
                            public registerServerRequestDispatcher(arg0: com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher, arg1: int): void
                            public registerServerRequestDispatcher(arg0: com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher, arg1: java.lang.String | string): void
                            public registerObjectAdapterFactory(arg0: com.sun.corba.se.spi.oa.ObjectAdapterFactory, arg1: int): void
                            public getServerRequestDispatcher(arg0: int): com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher
                            public getServerRequestDispatcher(arg0: java.lang.String | string): com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher
                            public getLocalClientRequestDispatcherFactory(arg0: int): com.sun.corba.se.spi.protocol.LocalClientRequestDispatcherFactory
                            public getClientRequestDispatcher(arg0: int): com.sun.corba.se.pept.protocol.ClientRequestDispatcher
                            public getObjectAdapterFactory(arg0: int): com.sun.corba.se.spi.oa.ObjectAdapterFactory
                            public getObjectAdapterFactories(): java.util.Set
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}