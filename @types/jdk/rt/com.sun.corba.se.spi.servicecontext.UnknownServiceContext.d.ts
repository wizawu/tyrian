declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace servicecontext {
                        class UnknownServiceContext extends com.sun.corba.se.spi.servicecontext.ServiceContext {
                            public constructor(arg0: int, arg1: byte[])
                            public constructor(arg0: int, arg1: org.omg.CORBA_2_3.portable.InputStream)
                            public getId(): int
                            public writeData(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
                            public write(arg0: org.omg.CORBA_2_3.portable.OutputStream, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion): void
                            public getData(): byte[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}