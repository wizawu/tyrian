declare namespace org {
    namespace omg {
        namespace DynamicAny {
            interface DynFixedOperations extends org.omg.DynamicAny.DynAnyOperations {
                get_value(): string
                set_value(arg0: java.lang.String | string): boolean
            }
        }
    }
}