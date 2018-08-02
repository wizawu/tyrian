declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
class EncapsInputStream extends com.sun.corba.se.impl.encoding.CDRInputStream {
    public constructor(arg0: org.omg.CORBA.ORB, arg1: byte[], arg2: int, arg3: boolean, arg4: com.sun.corba.se.spi.ior.iiop.GIOPVersion)
    public constructor(arg0: org.omg.CORBA.ORB, arg1: java.nio.ByteBuffer, arg2: int, arg3: boolean, arg4: com.sun.corba.se.spi.ior.iiop.GIOPVersion)
    public constructor(arg0: org.omg.CORBA.ORB, arg1: byte[], arg2: int)
    public constructor(arg0: com.sun.corba.se.impl.encoding.EncapsInputStream)
    public constructor(arg0: org.omg.CORBA.ORB, arg1: byte[], arg2: int, arg3: com.sun.corba.se.spi.ior.iiop.GIOPVersion)
    public constructor(arg0: org.omg.CORBA.ORB, arg1: byte[], arg2: int, arg3: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg4: com.sun.org.omg.SendingContext.CodeBase)
    public dup(): com.sun.corba.se.impl.encoding.CDRInputStream
    protected createCharBTCConverter(): com.sun.corba.se.impl.encoding.CodeSetConversion$BTCConverter
    protected createWCharBTCConverter(): com.sun.corba.se.impl.encoding.CodeSetConversion$BTCConverter
    public getCodeBase(): com.sun.org.omg.SendingContext.CodeBase
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}