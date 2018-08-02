declare namespace org {
    namespace omg {
        namespace CORBA {
class StringValueHelper implements org.omg.CORBA.portable.BoxedValueHelper {
    public constructor()
    public static insert(arg0: org.omg.CORBA.Any, arg1: java.lang.String | string): void
    public static extract(arg0: org.omg.CORBA.Any): string
    public static type(): org.omg.CORBA.TypeCode
    public static id(): string
    public static read(arg0: org.omg.CORBA.portable.InputStream): string
    public read_value(arg0: org.omg.CORBA.portable.InputStream): java.io.Serializable
    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.lang.String | string): void
    public write_value(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.io.Serializable): void
    public get_id(): string
    public static class: java.lang.Class<any>
}

        }
    }
}