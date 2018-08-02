declare namespace org {
    namespace omg {
        namespace CORBA {
abstract class ValueBaseHelper {
    public constructor()
    public static insert(arg0: org.omg.CORBA.Any, arg1: java.io.Serializable): void
    public static extract(arg0: org.omg.CORBA.Any): java.io.Serializable
    public static type(): org.omg.CORBA.TypeCode
    public static id(): string
    public static read(arg0: org.omg.CORBA.portable.InputStream): java.io.Serializable
    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.io.Serializable): void
    public static class: java.lang.Class<any>
}

        }
    }
}