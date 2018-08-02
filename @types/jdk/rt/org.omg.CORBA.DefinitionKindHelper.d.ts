declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class DefinitionKindHelper {
                public constructor()
                public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.CORBA.DefinitionKind): void
                public static extract(arg0: org.omg.CORBA.Any): org.omg.CORBA.DefinitionKind
                public static type(): org.omg.CORBA.TypeCode
                public static id(): string
                public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.CORBA.DefinitionKind
                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.CORBA.DefinitionKind): void
                public static class: java.lang.Class<any>
            }
        }
    }
}