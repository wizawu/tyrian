declare namespace org {
    namespace omg {
        namespace CORBA {
interface DynStruct extends org.omg.CORBA.Object , org.omg.CORBA.DynAny {
    current_member_name(): string
    current_member_kind(): org.omg.CORBA.TCKind
    get_members(): org.omg.CORBA.NameValuePair[]
    set_members(arg0: org.omg.CORBA.NameValuePair[]): void
}

        }
    }
}