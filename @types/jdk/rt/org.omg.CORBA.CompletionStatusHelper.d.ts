declare namespace org {
    namespace omg {
        namespace CORBA {
abstract class CompletionStatusHelper {
    public constructor()
    public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.CORBA.CompletionStatus): void
    public static extract(arg0: org.omg.CORBA.Any): org.omg.CORBA.CompletionStatus
    public static type(): org.omg.CORBA.TypeCode
    public static id(): string
    public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.CORBA.CompletionStatus
    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.CORBA.CompletionStatus): void
    public static class: java.lang.Class<any>
}

        }
    }
}