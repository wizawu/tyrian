declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        namespace iiop {
                            interface IIOPProfile extends com.sun.corba.se.spi.ior.TaggedProfile {
                                getORBVersion(): com.sun.corba.se.spi.orb.ORBVersion
                                getServant(): java.lang.Object
                                getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
                                getCodebase(): string
                            }
                        }
                    }
                }
            }
        }
    }
}