declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace encoding {
                        abstract class CorbaOutputObject extends com.sun.corba.se.impl.encoding.CDROutputStream implements com.sun.corba.se.pept.encoding.OutputObject {
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg2: byte, arg3: boolean, arg4: com.sun.corba.se.impl.encoding.BufferManagerWrite, arg5: byte, arg6: boolean)
                            public writeTo(arg0: com.sun.corba.se.spi.transport.CorbaConnection): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}