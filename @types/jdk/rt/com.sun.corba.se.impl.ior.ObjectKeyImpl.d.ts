declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
class ObjectKeyImpl implements com.sun.corba.se.spi.ior.ObjectKey {
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public getTemplate(): com.sun.corba.se.spi.ior.ObjectKeyTemplate
    public getId(): com.sun.corba.se.spi.ior.ObjectId
    public constructor(arg0: com.sun.corba.se.spi.ior.ObjectKeyTemplate, arg1: com.sun.corba.se.spi.ior.ObjectId)
    public write(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
    public getBytes(arg0: org.omg.CORBA.ORB): byte[]
    public getServerRequestDispatcher(arg0: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}