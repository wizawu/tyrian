declare namespace org {
    namespace omg {
        namespace CORBA {
            interface DynEnum extends org.omg.CORBA.Object , org.omg.CORBA.DynAny {
                value_as_string(): string
                value_as_string(arg0: java.lang.String | string): void
                value_as_ulong(): int
                value_as_ulong(arg0: int): void
            }
        }
    }
}