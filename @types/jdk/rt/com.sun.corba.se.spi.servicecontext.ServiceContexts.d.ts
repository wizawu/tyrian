declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace servicecontext {
class ServiceContexts {
    public static writeNullServiceContext(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
    public constructor(arg0: org.omg.CORBA_2_3.portable.InputStream)
    public addAlignmentPadding(): void
    public write(arg0: org.omg.CORBA_2_3.portable.OutputStream, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion): void
    public put(arg0: com.sun.corba.se.spi.servicecontext.ServiceContext): void
    public delete(arg0: int): void
    public delete(arg0: java.lang.Integer): void
    public get(arg0: int): com.sun.corba.se.spi.servicecontext.ServiceContext
    public get(arg0: java.lang.Integer): com.sun.corba.se.spi.servicecontext.ServiceContext
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}