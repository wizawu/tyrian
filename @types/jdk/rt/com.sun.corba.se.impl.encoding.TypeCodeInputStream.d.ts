declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
class TypeCodeInputStream extends com.sun.corba.se.impl.encoding.EncapsInputStream implements com.sun.corba.se.impl.encoding.TypeCodeReader {
    public constructor(arg0: org.omg.CORBA.ORB, arg1: byte[], arg2: int)
    public constructor(arg0: org.omg.CORBA.ORB, arg1: byte[], arg2: int, arg3: boolean, arg4: com.sun.corba.se.spi.ior.iiop.GIOPVersion)
    public constructor(arg0: org.omg.CORBA.ORB, arg1: java.nio.ByteBuffer, arg2: int, arg3: boolean, arg4: com.sun.corba.se.spi.ior.iiop.GIOPVersion)
    public addTypeCodeAtPosition(arg0: com.sun.corba.se.impl.corba.TypeCodeImpl, arg1: int): void
    public getTypeCodeAtPosition(arg0: int): com.sun.corba.se.impl.corba.TypeCodeImpl
    public setEnclosingInputStream(arg0: org.omg.CORBA_2_3.portable.InputStream): void
    public getTopLevelStream(): com.sun.corba.se.impl.encoding.TypeCodeReader
    public getTopLevelPosition(): int
    public static readEncapsulation(arg0: org.omg.CORBA_2_3.portable.InputStream, arg1: org.omg.CORBA.ORB): com.sun.corba.se.impl.encoding.TypeCodeInputStream
    protected makeEncapsulation(): void
    public printTypeMap(): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}