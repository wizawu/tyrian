declare namespace org {
    namespace omg {
        namespace CORBA {
            class CompletionStatus implements org.omg.CORBA.portable.IDLEntity {
                public static _COMPLETED_YES: int
                public static _COMPLETED_NO: int
                public static _COMPLETED_MAYBE: int
                public static COMPLETED_YES: org.omg.CORBA.CompletionStatus
                public static COMPLETED_NO: org.omg.CORBA.CompletionStatus
                public static COMPLETED_MAYBE: org.omg.CORBA.CompletionStatus
                public value(): int
                public static from_int(arg0: int): org.omg.CORBA.CompletionStatus
                public static class: java.lang.Class<any>
            }
        }
    }
}