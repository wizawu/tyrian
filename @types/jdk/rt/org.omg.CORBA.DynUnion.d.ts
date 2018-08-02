declare namespace org {
    namespace omg {
        namespace CORBA {
interface DynUnion extends org.omg.CORBA.Object , org.omg.CORBA.DynAny {
    set_as_default(): boolean
    set_as_default(arg0: boolean): void
    discriminator(): org.omg.CORBA.DynAny
    discriminator_kind(): org.omg.CORBA.TCKind
    member(): org.omg.CORBA.DynAny
    member_name(): string
    member_name(arg0: java.lang.String | string): void
    member_kind(): org.omg.CORBA.TCKind
}

        }
    }
}