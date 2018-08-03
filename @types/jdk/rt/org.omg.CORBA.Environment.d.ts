declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class Environment {
                public constructor()
                public abstract exception(): java.lang.Exception
                public abstract exception(arg0: java.lang.Exception): void
                public abstract clear(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}