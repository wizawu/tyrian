declare namespace org {
    namespace omg {
        namespace CORBA {
            interface DynSequence extends org.omg.CORBA.Object , org.omg.CORBA.DynAny {
                length(): int
                length(arg0: int): void
                get_elements(): org.omg.CORBA.Any[]
                set_elements(arg0: org.omg.CORBA.Any[]): void
            }
        }
    }
}