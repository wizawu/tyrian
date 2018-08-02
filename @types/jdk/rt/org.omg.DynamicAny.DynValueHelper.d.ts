declare namespace org {
    namespace omg {
        namespace DynamicAny {
abstract class DynValueHelper {
    public constructor()
    public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.DynamicAny.DynValue): void
    public static extract(arg0: org.omg.CORBA.Any): org.omg.DynamicAny.DynValue
    public static type(): org.omg.CORBA.TypeCode
    public static id(): string
    public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.DynamicAny.DynValue
    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.DynamicAny.DynValue): void
    public static narrow(arg0: org.omg.CORBA.Object): org.omg.DynamicAny.DynValue
    public static unchecked_narrow(arg0: org.omg.CORBA.Object): org.omg.DynamicAny.DynValue
    public static class: java.lang.Class<any>
}

        }
    }
}