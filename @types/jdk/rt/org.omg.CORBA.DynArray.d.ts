declare namespace org {
    namespace omg {
        namespace CORBA {
            interface DynArray extends org.omg.CORBA.Object , org.omg.CORBA.DynAny {
                get_elements(): org.omg.CORBA.Any[]
                set_elements(arg0: org.omg.CORBA.Any[]): void
            }
        }
    }
}