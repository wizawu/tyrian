declare namespace org {
    namespace omg {
        namespace DynamicAny {
interface DynValueBoxOperations extends org.omg.DynamicAny.DynValueCommonOperations {
    get_boxed_value(): org.omg.CORBA.Any
    set_boxed_value(arg0: org.omg.CORBA.Any): void
    get_boxed_value_as_dyn_any(): org.omg.DynamicAny.DynAny
    set_boxed_value_as_dyn_any(arg0: org.omg.DynamicAny.DynAny): void
}

        }
    }
}