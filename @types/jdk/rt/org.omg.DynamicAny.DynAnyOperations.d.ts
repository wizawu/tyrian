declare namespace org {
    namespace omg {
        namespace DynamicAny {
interface DynAnyOperations {
    type(): org.omg.CORBA.TypeCode
    assign(arg0: org.omg.DynamicAny.DynAny): void
    from_any(arg0: org.omg.CORBA.Any): void
    to_any(): org.omg.CORBA.Any
    equal(arg0: org.omg.DynamicAny.DynAny): boolean
    destroy(): void
    copy(): org.omg.DynamicAny.DynAny
    insert_boolean(arg0: boolean): void
    insert_octet(arg0: byte): void
    insert_char(arg0: char): void
    insert_short(arg0: short): void
    insert_ushort(arg0: short): void
    insert_long(arg0: int): void
    insert_ulong(arg0: int): void
    insert_float(arg0: float): void
    insert_double(arg0: double): void
    insert_string(arg0: java.lang.String | string): void
    insert_reference(arg0: org.omg.CORBA.Object): void
    insert_typecode(arg0: org.omg.CORBA.TypeCode): void
    insert_longlong(arg0: long): void
    insert_ulonglong(arg0: long): void
    insert_wchar(arg0: char): void
    insert_wstring(arg0: java.lang.String | string): void
    insert_any(arg0: org.omg.CORBA.Any): void
    insert_dyn_any(arg0: org.omg.DynamicAny.DynAny): void
    insert_val(arg0: java.io.Serializable): void
    get_boolean(): boolean
    get_octet(): byte
    get_char(): char
    get_short(): short
    get_ushort(): short
    get_long(): int
    get_ulong(): int
    get_float(): float
    get_double(): double
    get_string(): string
    get_reference(): org.omg.CORBA.Object
    get_typecode(): org.omg.CORBA.TypeCode
    get_longlong(): long
    get_ulonglong(): long
    get_wchar(): char
    get_wstring(): string
    get_any(): org.omg.CORBA.Any
    get_dyn_any(): org.omg.DynamicAny.DynAny
    get_val(): java.io.Serializable
    seek(arg0: int): boolean
    rewind(): void
    next(): boolean
    component_count(): int
    current_component(): org.omg.DynamicAny.DynAny
}

        }
    }
}