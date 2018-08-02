declare namespace org {
    namespace omg {
        namespace DynamicAny {
            interface DynAnyFactoryOperations {
                create_dyn_any(arg0: org.omg.CORBA.Any): org.omg.DynamicAny.DynAny
                create_dyn_any_from_type_code(arg0: org.omg.CORBA.TypeCode): org.omg.DynamicAny.DynAny
            }
        }
    }
}