declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace servicecontext {
                        class UEInfoServiceContext extends com.sun.corba.se.spi.servicecontext.ServiceContext {
                            public static readonly SERVICE_CONTEXT_ID: int
                            public constructor(arg0: java.lang.Throwable)
                            public constructor(arg0: org.omg.CORBA_2_3.portable.InputStream, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion)
                            public getId(): int
                            public writeData(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
                            public getUE(): java.lang.Throwable
                            public toString(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}