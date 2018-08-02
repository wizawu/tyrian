declare namespace org {
    namespace omg {
        namespace IOP {
            abstract class IORHelper {
                public constructor()
                public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.IOP.IOR): void
                public static extract(arg0: org.omg.CORBA.Any): org.omg.IOP.IOR
                public static type(): org.omg.CORBA.TypeCode
                public static id(): string
                public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.IOP.IOR
                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.IOP.IOR): void
                public static class: java.lang.Class<any>
            }
        }
    }
}