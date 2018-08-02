declare namespace org {
    namespace omg {
        namespace IOP {
abstract class CodecFactoryHelper {
    public constructor()
    public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.IOP.CodecFactory): void
    public static extract(arg0: org.omg.CORBA.Any): org.omg.IOP.CodecFactory
    public static type(): org.omg.CORBA.TypeCode
    public static id(): string
    public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.IOP.CodecFactory
    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.IOP.CodecFactory): void
    public static narrow(arg0: org.omg.CORBA.Object): org.omg.IOP.CodecFactory
    public static unchecked_narrow(arg0: org.omg.CORBA.Object): org.omg.IOP.CodecFactory
    public static class: java.lang.Class<any>
}

        }
    }
}