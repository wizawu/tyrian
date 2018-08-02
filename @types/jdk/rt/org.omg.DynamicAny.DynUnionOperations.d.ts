declare namespace org {
    namespace omg {
        namespace DynamicAny {
            interface DynUnionOperations extends org.omg.DynamicAny.DynAnyOperations {
                get_discriminator(): org.omg.DynamicAny.DynAny
                set_discriminator(arg0: org.omg.DynamicAny.DynAny): void
                set_to_default_member(): void
                set_to_no_active_member(): void
                has_no_active_member(): boolean
                discriminator_kind(): org.omg.CORBA.TCKind
                member_kind(): org.omg.CORBA.TCKind
                member(): org.omg.DynamicAny.DynAny
                member_name(): string
            }
        }
    }
}