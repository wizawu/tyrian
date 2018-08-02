declare namespace org {
    namespace omg {
        namespace IOP {
            abstract class MultipleComponentProfileHelper {
                public constructor()
                public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.IOP.TaggedComponent[]): void
                public static extract(arg0: org.omg.CORBA.Any): org.omg.IOP.TaggedComponent[]
                public static type(): org.omg.CORBA.TypeCode
                public static id(): string
                public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.IOP.TaggedComponent[]
                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.IOP.TaggedComponent[]): void
                public static class: java.lang.Class<any>
            }
        }
    }
}