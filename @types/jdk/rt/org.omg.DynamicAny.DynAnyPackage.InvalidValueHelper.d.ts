declare namespace org {
    namespace omg {
        namespace DynamicAny {
            namespace DynAnyPackage {
abstract class InvalidValueHelper {
    public constructor()
    public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.DynamicAny.DynAnyPackage.InvalidValue): void
    public static extract(arg0: org.omg.CORBA.Any): org.omg.DynamicAny.DynAnyPackage.InvalidValue
    public static type(): org.omg.CORBA.TypeCode
    public static id(): string
    public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.DynamicAny.DynAnyPackage.InvalidValue
    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.DynamicAny.DynAnyPackage.InvalidValue): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}