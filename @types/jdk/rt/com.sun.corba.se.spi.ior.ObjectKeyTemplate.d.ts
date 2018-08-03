declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        interface ObjectKeyTemplate extends com.sun.corba.se.spi.ior.Writeable {
                            getORBVersion(): com.sun.corba.se.spi.orb.ORBVersion
                            getSubcontractId(): int
                            getServerId(): int
                            getORBId(): string
                            getObjectAdapterId(): com.sun.corba.se.spi.ior.ObjectAdapterId
                            getAdapterId(): byte[]
                            write(arg0: com.sun.corba.se.spi.ior.ObjectId, arg1: org.omg.CORBA_2_3.portable.OutputStream): void
                            getServerRequestDispatcher(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.ObjectId): com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher
                        }
                    }
                }
            }
        }
    }
}