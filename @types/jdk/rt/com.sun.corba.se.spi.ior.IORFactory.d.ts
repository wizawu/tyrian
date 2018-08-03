declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        interface IORFactory extends com.sun.corba.se.spi.ior.Writeable , com.sun.corba.se.spi.ior.MakeImmutable {
                            makeIOR(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string, arg2: com.sun.corba.se.spi.ior.ObjectId | com.sun.corba.se.spi.ior.ObjectId$$Lambda): com.sun.corba.se.spi.ior.IOR
                            isEquivalent(arg0: com.sun.corba.se.spi.ior.IORFactory): boolean
                        }
                    }
                }
            }
        }
    }
}