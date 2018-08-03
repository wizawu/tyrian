declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace protocol {
                        interface CorbaServerRequestDispatcher extends com.sun.corba.se.pept.protocol.ServerRequestDispatcher {
                            locate(arg0: com.sun.corba.se.spi.ior.ObjectKey): com.sun.corba.se.spi.ior.IOR
                        }
                    }
                }
            }
        }
    }
}