declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class DoubleSeqHelper {
                public constructor()
                public static insert(arg0: org.omg.CORBA.Any, arg1: double[]): void
                public static extract(arg0: org.omg.CORBA.Any): double[]
                public static type(): org.omg.CORBA.TypeCode
                public static id(): string
                public static read(arg0: org.omg.CORBA.portable.InputStream): double[]
                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: double[]): void
                public static class: java.lang.Class<any>
            }
        }
    }
}