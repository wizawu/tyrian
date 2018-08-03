declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class ContextList {
                public constructor()
                public abstract count(): int
                public abstract add(arg0: java.lang.String | string): void
                public abstract item(arg0: int): string
                public abstract remove(arg0: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}