declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class NamedValue {
                public constructor()
                public abstract name(): string
                public abstract value(): org.omg.CORBA.Any
                public abstract flags(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}