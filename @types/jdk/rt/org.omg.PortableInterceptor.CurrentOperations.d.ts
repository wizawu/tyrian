declare namespace org {
    namespace omg {
        namespace PortableInterceptor {
            interface CurrentOperations extends org.omg.CORBA.CurrentOperations {
                get_slot(arg0: int): org.omg.CORBA.Any
                set_slot(arg0: int, arg1: org.omg.CORBA.Any): void
            }
        }
    }
}