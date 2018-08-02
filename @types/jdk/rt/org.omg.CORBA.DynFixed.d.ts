declare namespace org {
    namespace omg {
        namespace CORBA {
            interface DynFixed extends org.omg.CORBA.Object , org.omg.CORBA.DynAny {
                get_value(): byte[]
                set_value(arg0: byte[]): void
            }
        }
    }
}