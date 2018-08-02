declare namespace org {
    namespace omg {
        namespace CORBA {
abstract class LongLongSeqHelper {
    public constructor()
    public static insert(arg0: org.omg.CORBA.Any, arg1: long[]): void
    public static extract(arg0: org.omg.CORBA.Any): long[]
    public static type(): org.omg.CORBA.TypeCode
    public static id(): string
    public static read(arg0: org.omg.CORBA.portable.InputStream): long[]
    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: long[]): void
    public static class: java.lang.Class<any>
}

        }
    }
}