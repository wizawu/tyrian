declare namespace org {
    namespace omg {
        namespace PortableServer {
            abstract class CurrentHelper {
                public constructor()
                public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.PortableServer.Current): void
                public static extract(arg0: org.omg.CORBA.Any): org.omg.PortableServer.Current
                public static type(): org.omg.CORBA.TypeCode
                public static id(): string
                public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.PortableServer.Current
                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.PortableServer.Current): void
                public static narrow(arg0: org.omg.CORBA.Object): org.omg.PortableServer.Current
                public static class: java.lang.Class<any>
            }
        }
    }
}