declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class TypeCode implements org.omg.CORBA.portable.IDLEntity {
                public constructor()
                public abstract equal(arg0: org.omg.CORBA.TypeCode): boolean
                public abstract equivalent(arg0: org.omg.CORBA.TypeCode): boolean
                public abstract get_compact_typecode(): org.omg.CORBA.TypeCode
                public abstract kind(): org.omg.CORBA.TCKind
                public abstract id(): string
                public abstract name(): string
                public abstract member_count(): int
                public abstract member_name(arg0: int): string
                public abstract member_type(arg0: int): org.omg.CORBA.TypeCode
                public abstract member_label(arg0: int): org.omg.CORBA.Any
                public abstract discriminator_type(): org.omg.CORBA.TypeCode
                public abstract default_index(): int
                public abstract length(): int
                public abstract content_type(): org.omg.CORBA.TypeCode
                public abstract fixed_digits(): short
                public abstract fixed_scale(): short
                public abstract member_visibility(arg0: int): short
                public abstract type_modifier(): short
                public abstract concrete_base_type(): org.omg.CORBA.TypeCode
                public static class: java.lang.Class<any>
            }
        }
    }
}