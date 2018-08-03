declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace protocol {
                        interface InitialServerRequestDispatcher extends com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher {
                            init(arg0: com.sun.corba.se.spi.resolver.Resolver): void
                        }
                        interface InitialServerRequestDispatcher$$Lambda extends com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher {
                            (arg0: com.sun.corba.se.spi.resolver.Resolver): void
                        }
                    }
                }
            }
        }
    }
}