declare namespace org {
    namespace omg {
        namespace DynamicAny {
            interface DynArrayOperations extends org.omg.DynamicAny.DynAnyOperations {
                get_elements(): org.omg.CORBA.Any[]
                set_elements(arg0: org.omg.CORBA.Any[]): void
                get_elements_as_dyn_any(): org.omg.DynamicAny.DynAny[]
                set_elements_as_dyn_any(arg0: org.omg.DynamicAny.DynAny[]): void
            }
        }
    }
}