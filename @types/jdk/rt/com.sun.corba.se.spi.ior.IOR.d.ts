declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
interface IOR extends java.util.List , com.sun.corba.se.spi.ior.Writeable , com.sun.corba.se.spi.ior.MakeImmutable {
    getORB(): com.sun.corba.se.spi.orb.ORB
    getTypeId(): string
    iteratorById(arg0: int): java.util.Iterator
    stringify(): string
    getIOPIOR(): org.omg.IOP.IOR
    isNil(): boolean
    isEquivalent(arg0: com.sun.corba.se.spi.ior.IOR): boolean
    getIORTemplates(): com.sun.corba.se.spi.ior.IORTemplateList
    getProfile(): com.sun.corba.se.spi.ior.iiop.IIOPProfile
}

                    }
                }
            }
        }
    }
}