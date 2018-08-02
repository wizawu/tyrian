declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace corba {
abstract class TypeCodeImplHelper {
    public constructor()
    public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.CORBA.TypeCode): void
    public static extract(arg0: org.omg.CORBA.Any): org.omg.CORBA.TypeCode
    public static type(): org.omg.CORBA.TypeCode
    public static id(): string
    public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.CORBA.TypeCode
    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.CORBA.TypeCode): void
    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: com.sun.corba.se.impl.corba.TypeCodeImpl): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}