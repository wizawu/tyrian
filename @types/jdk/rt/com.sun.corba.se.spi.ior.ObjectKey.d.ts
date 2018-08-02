declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        interface ObjectKey extends com.sun.corba.se.spi.ior.Writeable {
                            getId(): com.sun.corba.se.spi.ior.ObjectId
                            getTemplate(): com.sun.corba.se.spi.ior.ObjectKeyTemplate
                            getBytes(arg0: org.omg.CORBA.ORB): byte[]
                            getServerRequestDispatcher(arg0: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher
                        }
                    }
                }
            }
        }
    }
}