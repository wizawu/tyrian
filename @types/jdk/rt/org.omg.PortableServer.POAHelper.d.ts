declare namespace org {
    namespace omg {
        namespace PortableServer {
            abstract class POAHelper {
                public constructor()
                public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.PortableServer.POA): void
                public static extract(arg0: org.omg.CORBA.Any): org.omg.PortableServer.POA
                public static type(): org.omg.CORBA.TypeCode
                public static id(): string
                public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.PortableServer.POA
                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.PortableServer.POA): void
                public static narrow(arg0: org.omg.CORBA.Object): org.omg.PortableServer.POA
                public static class: java.lang.Class<any>
            }
        }
    }
}