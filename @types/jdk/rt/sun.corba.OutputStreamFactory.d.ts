declare namespace sun {
    namespace corba {
        class OutputStreamFactory {
            public static newTypeCodeOutputStream(arg0: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.impl.encoding.TypeCodeOutputStream
            public static newTypeCodeOutputStream(arg0: com.sun.corba.se.spi.orb.ORB, arg1: boolean): com.sun.corba.se.impl.encoding.TypeCodeOutputStream
            public static newEncapsOutputStream(arg0: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.impl.encoding.EncapsOutputStream
            public static newEncapsOutputStream(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion): com.sun.corba.se.impl.encoding.EncapsOutputStream
            public static newEncapsOutputStream(arg0: com.sun.corba.se.spi.orb.ORB, arg1: boolean): com.sun.corba.se.impl.encoding.EncapsOutputStream
            public static newCDROutputObject(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.pept.protocol.MessageMediator, arg2: com.sun.corba.se.impl.protocol.giopmsgheaders.Message, arg3: byte): com.sun.corba.se.impl.encoding.CDROutputObject
            public static newCDROutputObject(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.pept.protocol.MessageMediator, arg2: com.sun.corba.se.impl.protocol.giopmsgheaders.Message, arg3: byte, arg4: int): com.sun.corba.se.impl.encoding.CDROutputObject
            public static newCDROutputObject(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg2: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg3: com.sun.corba.se.spi.transport.CorbaConnection, arg4: com.sun.corba.se.impl.protocol.giopmsgheaders.Message, arg5: byte): com.sun.corba.se.impl.encoding.CDROutputObject
            public static class: java.lang.Class<any>
        }
    }
}