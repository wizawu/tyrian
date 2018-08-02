declare namespace org {
    namespace omg {
        namespace CosNaming {
            abstract class NamingContextExtHelper {
                public constructor()
                public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.CosNaming.NamingContextExt): void
                public static extract(arg0: org.omg.CORBA.Any): org.omg.CosNaming.NamingContextExt
                public static type(): org.omg.CORBA.TypeCode
                public static id(): string
                public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.CosNaming.NamingContextExt
                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.CosNaming.NamingContextExt): void
                public static narrow(arg0: org.omg.CORBA.Object): org.omg.CosNaming.NamingContextExt
                public static unchecked_narrow(arg0: org.omg.CORBA.Object): org.omg.CosNaming.NamingContextExt
                public static class: java.lang.Class<any>
            }
        }
    }
}