declare namespace org {
    namespace omg {
        namespace CORBA {
abstract class TypeCode implements org.omg.CORBA.portable.IDLEntity {
    public constructor()
    public equal(arg0: org.omg.CORBA.TypeCode): boolean
    public equivalent(arg0: org.omg.CORBA.TypeCode): boolean
    public get_compact_typecode(): org.omg.CORBA.TypeCode
    public kind(): org.omg.CORBA.TCKind
    public id(): string
    public name(): string
    public member_count(): int
    public member_name(arg0: int): string
    public member_type(arg0: int): org.omg.CORBA.TypeCode
    public member_label(arg0: int): org.omg.CORBA.Any
    public discriminator_type(): org.omg.CORBA.TypeCode
    public default_index(): int
    public length(): int
    public content_type(): org.omg.CORBA.TypeCode
    public fixed_digits(): short
    public fixed_scale(): short
    public member_visibility(arg0: int): short
    public type_modifier(): short
    public concrete_base_type(): org.omg.CORBA.TypeCode
    public static class: java.lang.Class<any>
}

        }
    }
}