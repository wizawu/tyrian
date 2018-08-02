declare namespace org {
    namespace omg {
        namespace CosNaming {
            namespace NamingContextPackage {
abstract class NotFoundReasonHelper {
    public constructor()
    public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.CosNaming.NamingContextPackage.NotFoundReason): void
    public static extract(arg0: org.omg.CORBA.Any): org.omg.CosNaming.NamingContextPackage.NotFoundReason
    public static type(): org.omg.CORBA.TypeCode
    public static id(): string
    public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.CosNaming.NamingContextPackage.NotFoundReason
    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.CosNaming.NamingContextPackage.NotFoundReason): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}