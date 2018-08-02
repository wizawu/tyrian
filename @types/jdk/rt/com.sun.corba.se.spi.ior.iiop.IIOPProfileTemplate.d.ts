declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        namespace iiop {
                            interface IIOPProfileTemplate extends com.sun.corba.se.spi.ior.TaggedProfileTemplate {
                                getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
                                getPrimaryAddress(): com.sun.corba.se.spi.ior.iiop.IIOPAddress
                            }
                        }
                    }
                }
            }
        }
    }
}