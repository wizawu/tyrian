declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class OctetSeqHelper {
                public constructor()
                public static insert(arg0: org.omg.CORBA.Any, arg1: byte[]): void
                public static extract(arg0: org.omg.CORBA.Any): byte[]
                public static type(): org.omg.CORBA.TypeCode
                public static id(): string
                public static read(arg0: org.omg.CORBA.portable.InputStream): byte[]
                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: byte[]): void
                public static class: java.lang.Class<any>
            }
        }
    }
}