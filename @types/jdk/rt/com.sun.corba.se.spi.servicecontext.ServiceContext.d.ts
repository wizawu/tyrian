declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace servicecontext {
                        abstract class ServiceContext {
                            protected in: org.omg.CORBA_2_3.portable.InputStream
                            protected constructor()
                            protected constructor(arg0: org.omg.CORBA_2_3.portable.InputStream, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion)
                            public abstract getId(): int
                            public write(arg0: org.omg.CORBA_2_3.portable.OutputStream, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion): void
                            protected abstract writeData(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
                            public toString(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}