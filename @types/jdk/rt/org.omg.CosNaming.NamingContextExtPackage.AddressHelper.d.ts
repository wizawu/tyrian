declare namespace org {
    namespace omg {
        namespace CosNaming {
            namespace NamingContextExtPackage {
                abstract class AddressHelper {
                    public constructor()
                    public static insert(arg0: org.omg.CORBA.Any, arg1: java.lang.String | string): void
                    public static extract(arg0: org.omg.CORBA.Any): string
                    public static type(): org.omg.CORBA.TypeCode
                    public static id(): string
                    public static read(arg0: org.omg.CORBA.portable.InputStream): string
                    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.lang.String | string): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}