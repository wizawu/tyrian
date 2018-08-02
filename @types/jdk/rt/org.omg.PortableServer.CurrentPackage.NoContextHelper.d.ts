declare namespace org {
    namespace omg {
        namespace PortableServer {
            namespace CurrentPackage {
abstract class NoContextHelper {
    public constructor()
    public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.PortableServer.CurrentPackage.NoContext): void
    public static extract(arg0: org.omg.CORBA.Any): org.omg.PortableServer.CurrentPackage.NoContext
    public static type(): org.omg.CORBA.TypeCode
    public static id(): string
    public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.PortableServer.CurrentPackage.NoContext
    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.PortableServer.CurrentPackage.NoContext): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}