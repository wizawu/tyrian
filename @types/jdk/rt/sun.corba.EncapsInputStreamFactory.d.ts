declare namespace sun {
    namespace corba {
class EncapsInputStreamFactory {
    public constructor()
    public static newEncapsInputStream(arg0: org.omg.CORBA.ORB, arg1: byte[], arg2: int, arg3: boolean, arg4: com.sun.corba.se.spi.ior.iiop.GIOPVersion): com.sun.corba.se.impl.encoding.EncapsInputStream
    public static newEncapsInputStream(arg0: org.omg.CORBA.ORB, arg1: java.nio.ByteBuffer, arg2: int, arg3: boolean, arg4: com.sun.corba.se.spi.ior.iiop.GIOPVersion): com.sun.corba.se.impl.encoding.EncapsInputStream
    public static newEncapsInputStream(arg0: org.omg.CORBA.ORB, arg1: byte[], arg2: int): com.sun.corba.se.impl.encoding.EncapsInputStream
    public static newEncapsInputStream(arg0: com.sun.corba.se.impl.encoding.EncapsInputStream): com.sun.corba.se.impl.encoding.EncapsInputStream
    public static newEncapsInputStream(arg0: org.omg.CORBA.ORB, arg1: byte[], arg2: int, arg3: com.sun.corba.se.spi.ior.iiop.GIOPVersion): com.sun.corba.se.impl.encoding.EncapsInputStream
    public static newEncapsInputStream(arg0: org.omg.CORBA.ORB, arg1: byte[], arg2: int, arg3: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg4: com.sun.org.omg.SendingContext.CodeBase): com.sun.corba.se.impl.encoding.EncapsInputStream
    public static newTypeCodeInputStream(arg0: org.omg.CORBA.ORB, arg1: byte[], arg2: int, arg3: boolean, arg4: com.sun.corba.se.spi.ior.iiop.GIOPVersion): com.sun.corba.se.impl.encoding.TypeCodeInputStream
    public static newTypeCodeInputStream(arg0: org.omg.CORBA.ORB, arg1: java.nio.ByteBuffer, arg2: int, arg3: boolean, arg4: com.sun.corba.se.spi.ior.iiop.GIOPVersion): com.sun.corba.se.impl.encoding.TypeCodeInputStream
    public static newTypeCodeInputStream(arg0: org.omg.CORBA.ORB, arg1: byte[], arg2: int): com.sun.corba.se.impl.encoding.TypeCodeInputStream
    public static class: java.lang.Class<any>
}

    }
}