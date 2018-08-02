declare namespace org {
    namespace omg {
        namespace IOP {
abstract class ComponentIdHelper {
    public constructor()
    public static insert(arg0: org.omg.CORBA.Any, arg1: int): void
    public static extract(arg0: org.omg.CORBA.Any): int
    public static type(): org.omg.CORBA.TypeCode
    public static id(): string
    public static read(arg0: org.omg.CORBA.portable.InputStream): int
    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: int): void
    public static class: java.lang.Class<any>
}

        }
    }
}