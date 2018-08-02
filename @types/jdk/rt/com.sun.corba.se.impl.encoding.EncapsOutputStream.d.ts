declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
class EncapsOutputStream extends com.sun.corba.se.impl.encoding.CDROutputStream {
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion)
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: boolean)
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg2: boolean)
    public create_input_stream(): org.omg.CORBA.portable.InputStream
    protected createCharCTBConverter(): com.sun.corba.se.impl.encoding.CodeSetConversion$CTBConverter
    protected createWCharCTBConverter(): com.sun.corba.se.impl.encoding.CodeSetConversion$CTBConverter
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}