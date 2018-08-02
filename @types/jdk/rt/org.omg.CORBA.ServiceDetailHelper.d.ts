declare namespace org {
    namespace omg {
        namespace CORBA {
abstract class ServiceDetailHelper {
    public constructor()
    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.CORBA.ServiceDetail): void
    public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.CORBA.ServiceDetail
    public static extract(arg0: org.omg.CORBA.Any): org.omg.CORBA.ServiceDetail
    public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.CORBA.ServiceDetail): void
    public static type(): org.omg.CORBA.TypeCode
    public static id(): string
    public static class: java.lang.Class<any>
}

        }
    }
}