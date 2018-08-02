declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class SystemException extends java.lang.RuntimeException {
                public minor: int
                public completed: org.omg.CORBA.CompletionStatus
                protected constructor(arg0: java.lang.String | string, arg1: int, arg2: org.omg.CORBA.CompletionStatus)
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}