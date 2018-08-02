declare namespace org {
    namespace omg {
        namespace DynamicAny {
            namespace DynAnyFactoryPackage {
abstract class InconsistentTypeCodeHelper {
    public constructor()
    public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.DynamicAny.DynAnyFactoryPackage.InconsistentTypeCode): void
    public static extract(arg0: org.omg.CORBA.Any): org.omg.DynamicAny.DynAnyFactoryPackage.InconsistentTypeCode
    public static type(): org.omg.CORBA.TypeCode
    public static id(): string
    public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.DynamicAny.DynAnyFactoryPackage.InconsistentTypeCode
    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.DynamicAny.DynAnyFactoryPackage.InconsistentTypeCode): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}