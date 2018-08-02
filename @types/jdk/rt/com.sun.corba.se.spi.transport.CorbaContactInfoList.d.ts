declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace transport {
interface CorbaContactInfoList extends com.sun.corba.se.pept.transport.ContactInfoList {
    setTargetIOR(arg0: com.sun.corba.se.spi.ior.IOR): void
    getTargetIOR(): com.sun.corba.se.spi.ior.IOR
    setEffectiveTargetIOR(arg0: com.sun.corba.se.spi.ior.IOR): void
    getEffectiveTargetIOR(): com.sun.corba.se.spi.ior.IOR
    getLocalClientRequestDispatcher(): com.sun.corba.se.spi.protocol.LocalClientRequestDispatcher
    hashCode(): int
}

                    }
                }
            }
        }
    }
}