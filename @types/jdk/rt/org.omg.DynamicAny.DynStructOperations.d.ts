declare namespace org {
    namespace omg {
        namespace DynamicAny {
interface DynStructOperations extends org.omg.DynamicAny.DynAnyOperations {
    current_member_name(): string
    current_member_kind(): org.omg.CORBA.TCKind
    get_members(): org.omg.DynamicAny.NameValuePair[]
    set_members(arg0: org.omg.DynamicAny.NameValuePair[]): void
    get_members_as_dyn_any(): org.omg.DynamicAny.NameDynAnyPair[]
    set_members_as_dyn_any(arg0: org.omg.DynamicAny.NameDynAnyPair[]): void
}

        }
    }
}