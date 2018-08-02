declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace dynamicany {
class DynValueImpl extends com.sun.corba.se.impl.dynamicany.DynValueCommonImpl implements org.omg.DynamicAny.DynValue {
    protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.Any, arg2: boolean)
    protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.TypeCode)
    public set_members_as_dyn_any(arg0: org.omg.DynamicAny.NameDynAnyPair[]): void
    public set_members(arg0: org.omg.DynamicAny.NameValuePair[]): void
    public get_members_as_dyn_any(): org.omg.DynamicAny.NameDynAnyPair[]
    public get_members(): org.omg.DynamicAny.NameValuePair[]
    public set_to_value(): void
    public set_to_null(): void
    public is_null(): boolean
    public current_member_kind(): org.omg.CORBA.TCKind
    public current_member_name(): string
    public get_dyn_any(): org.omg.DynamicAny.DynAny
    public get_any(): org.omg.CORBA.Any
    public get_wstring(): string
    public get_wchar(): char
    public get_ulonglong(): long
    public get_longlong(): long
    public get_typecode(): org.omg.CORBA.TypeCode
    public get_reference(): org.omg.CORBA.Object
    public get_string(): string
    public get_double(): double
    public get_float(): float
    public get_ulong(): int
    public get_long(): int
    public get_ushort(): short
    public get_short(): short
    public get_char(): char
    public get_octet(): byte
    public get_boolean(): boolean
    public get_val(): java.io.Serializable
    public insert_val(arg0: java.io.Serializable): void
    public insert_dyn_any(arg0: org.omg.DynamicAny.DynAny): void
    public insert_any(arg0: org.omg.CORBA.Any): void
    public insert_wstring(arg0: java.lang.String | string): void
    public insert_wchar(arg0: char): void
    public insert_ulonglong(arg0: long): void
    public insert_longlong(arg0: long): void
    public insert_typecode(arg0: org.omg.CORBA.TypeCode): void
    public insert_reference(arg0: org.omg.CORBA.Object): void
    public insert_string(arg0: java.lang.String | string): void
    public insert_double(arg0: double): void
    public insert_float(arg0: float): void
    public insert_ulong(arg0: int): void
    public insert_long(arg0: int): void
    public insert_ushort(arg0: short): void
    public insert_short(arg0: short): void
    public insert_char(arg0: char): void
    public insert_octet(arg0: byte): void
    public insert_boolean(arg0: boolean): void
    public copy(): org.omg.DynamicAny.DynAny
    public destroy(): void
    public equal(arg0: org.omg.DynamicAny.DynAny): boolean
    public to_any(): org.omg.CORBA.Any
    public from_any(arg0: org.omg.CORBA.Any): void
    public assign(arg0: org.omg.DynamicAny.DynAny): void
    public rewind(): void
    public seek(arg0: int): boolean
    public next(): boolean
    public component_count(): int
    public current_component(): org.omg.DynamicAny.DynAny
    public _ids(): java.lang.String[]
    public type(): org.omg.CORBA.TypeCode
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}