declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace transport {
                        interface CorbaContactInfo extends com.sun.corba.se.pept.transport.ContactInfo {
                            getTargetIOR(): com.sun.corba.se.spi.ior.IOR
                            getEffectiveTargetIOR(): com.sun.corba.se.spi.ior.IOR
                            getEffectiveProfile(): com.sun.corba.se.spi.ior.iiop.IIOPProfile
                            setAddressingDisposition(arg0: short): void
                            getAddressingDisposition(): short
                            getMonitoringName(): string
                        }
                    }
                }
            }
        }
    }
}