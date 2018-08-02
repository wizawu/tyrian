declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
class EncapsulationUtility {
    public static readIdentifiableSequence(arg0: java.util.List, arg1: com.sun.corba.se.spi.ior.IdentifiableFactoryFinder, arg2: org.omg.CORBA_2_3.portable.InputStream): void
    public static writeIdentifiableSequence(arg0: java.util.List, arg1: org.omg.CORBA_2_3.portable.OutputStream): void
    public static writeOutputStream(arg0: org.omg.CORBA_2_3.portable.OutputStream, arg1: org.omg.CORBA_2_3.portable.OutputStream): void
    public static getEncapsulationStream(arg0: org.omg.CORBA_2_3.portable.InputStream): org.omg.CORBA_2_3.portable.InputStream
    public static readOctets(arg0: org.omg.CORBA_2_3.portable.InputStream): byte[]
    public static writeEncapsulation(arg0: com.sun.corba.se.spi.ior.WriteContents | com.sun.corba.se.spi.ior.WriteContents$$Lambda, arg1: org.omg.CORBA_2_3.portable.OutputStream): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}