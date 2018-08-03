declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class Context {
                public constructor()
                public abstract context_name(): string
                public abstract parent(): org.omg.CORBA.Context
                public abstract create_child(arg0: java.lang.String | string): org.omg.CORBA.Context
                public abstract set_one_value(arg0: java.lang.String | string, arg1: org.omg.CORBA.Any): void
                public abstract set_values(arg0: org.omg.CORBA.NVList): void
                public abstract delete_values(arg0: java.lang.String | string): void
                public abstract get_values(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string): org.omg.CORBA.NVList
                public static class: java.lang.Class<any>
            }
        }
    }
}