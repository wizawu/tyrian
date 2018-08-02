declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
class WireObjectKeyTemplate implements com.sun.corba.se.spi.ior.ObjectKeyTemplate {
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
    public constructor(arg0: org.omg.CORBA_2_3.portable.InputStream, arg1: org.omg.CORBA.OctetSeqHolder)
    public write(arg0: com.sun.corba.se.spi.ior.ObjectId, arg1: org.omg.CORBA_2_3.portable.OutputStream): void
    public write(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
    public getSubcontractId(): int
    public getServerId(): int
    public getORBId(): string
    public getObjectAdapterId(): com.sun.corba.se.spi.ior.ObjectAdapterId
    public getAdapterId(): byte[]
    public getORBVersion(): com.sun.corba.se.spi.orb.ORBVersion
    public getServerRequestDispatcher(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.ObjectId): com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}