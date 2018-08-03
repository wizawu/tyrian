declare namespace org {
    namespace omg {
        namespace CORBA {
            class CompletionStatus implements org.omg.CORBA.portable.IDLEntity {
                public static readonly _COMPLETED_YES: int
                public static readonly _COMPLETED_NO: int
                public static readonly _COMPLETED_MAYBE: int
                public static readonly COMPLETED_YES: org.omg.CORBA.CompletionStatus
                public static readonly COMPLETED_NO: org.omg.CORBA.CompletionStatus
                public static readonly COMPLETED_MAYBE: org.omg.CORBA.CompletionStatus
                public value(): int
                public static from_int(arg0: int): org.omg.CORBA.CompletionStatus
                public static class: java.lang.Class<any>
            }
        }
    }
}