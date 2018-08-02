declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class ExceptionList {
                public constructor()
                public count(): int
                public add(arg0: org.omg.CORBA.TypeCode): void
                public item(arg0: int): org.omg.CORBA.TypeCode
                public remove(arg0: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}