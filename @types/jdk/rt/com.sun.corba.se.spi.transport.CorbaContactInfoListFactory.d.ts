declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace transport {
                        interface CorbaContactInfoListFactory {
                            setORB(arg0: com.sun.corba.se.spi.orb.ORB): void
                            create(arg0: com.sun.corba.se.spi.ior.IOR): com.sun.corba.se.spi.transport.CorbaContactInfoList
                        }
                    }
                }
            }
        }
    }
}