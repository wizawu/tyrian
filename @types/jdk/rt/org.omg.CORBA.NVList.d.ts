declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class NVList {
                public constructor()
                public abstract count(): int
                public abstract add(arg0: int): org.omg.CORBA.NamedValue
                public abstract add_item(arg0: java.lang.String | string, arg1: int): org.omg.CORBA.NamedValue
                public abstract add_value(arg0: java.lang.String | string, arg1: org.omg.CORBA.Any, arg2: int): org.omg.CORBA.NamedValue
                public abstract item(arg0: int): org.omg.CORBA.NamedValue
                public abstract remove(arg0: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}