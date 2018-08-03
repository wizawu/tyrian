declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class ExceptionList {
                public constructor()
                public abstract count(): int
                public abstract add(arg0: org.omg.CORBA.TypeCode): void
                public abstract item(arg0: int): org.omg.CORBA.TypeCode
                public abstract remove(arg0: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}