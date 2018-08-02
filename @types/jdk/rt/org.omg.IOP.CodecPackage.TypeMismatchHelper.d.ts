declare namespace org {
    namespace omg {
        namespace IOP {
            namespace CodecPackage {
                abstract class TypeMismatchHelper {
                    public constructor()
                    public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.IOP.CodecPackage.TypeMismatch): void
                    public static extract(arg0: org.omg.CORBA.Any): org.omg.IOP.CodecPackage.TypeMismatch
                    public static type(): org.omg.CORBA.TypeCode
                    public static id(): string
                    public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.IOP.CodecPackage.TypeMismatch
                    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.IOP.CodecPackage.TypeMismatch): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}