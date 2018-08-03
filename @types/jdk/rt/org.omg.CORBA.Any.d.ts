declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class Any implements org.omg.CORBA.portable.IDLEntity {
                public constructor()
                public abstract equal(arg0: org.omg.CORBA.Any): boolean
                public abstract type(): org.omg.CORBA.TypeCode
                public abstract type(arg0: org.omg.CORBA.TypeCode): void
                public abstract read_value(arg0: org.omg.CORBA.portable.InputStream, arg1: org.omg.CORBA.TypeCode): void
                public abstract write_value(arg0: org.omg.CORBA.portable.OutputStream): void
                public abstract create_output_stream(): org.omg.CORBA.portable.OutputStream
                public abstract create_input_stream(): org.omg.CORBA.portable.InputStream
                public abstract extract_short(): short
                public abstract insert_short(arg0: short): void
                public abstract extract_long(): int
                public abstract insert_long(arg0: int): void
                public abstract extract_longlong(): long
                public abstract insert_longlong(arg0: long): void
                public abstract extract_ushort(): short
                public abstract insert_ushort(arg0: short): void
                public abstract extract_ulong(): int
                public abstract insert_ulong(arg0: int): void
                public abstract extract_ulonglong(): long
                public abstract insert_ulonglong(arg0: long): void
                public abstract extract_float(): float
                public abstract insert_float(arg0: float): void
                public abstract extract_double(): double
                public abstract insert_double(arg0: double): void
                public abstract extract_boolean(): boolean
                public abstract insert_boolean(arg0: boolean): void
                public abstract extract_char(): char
                public abstract insert_char(arg0: char): void
                public abstract extract_wchar(): char
                public abstract insert_wchar(arg0: char): void
                public abstract extract_octet(): byte
                public abstract insert_octet(arg0: byte): void
                public abstract extract_any(): org.omg.CORBA.Any
                public abstract insert_any(arg0: org.omg.CORBA.Any): void
                public abstract extract_Object(): org.omg.CORBA.Object
                public abstract insert_Object(arg0: org.omg.CORBA.Object): void
                public abstract extract_Value(): java.io.Serializable
                public abstract insert_Value(arg0: java.io.Serializable): void
                public abstract insert_Value(arg0: java.io.Serializable, arg1: org.omg.CORBA.TypeCode): void
                public abstract insert_Object(arg0: org.omg.CORBA.Object, arg1: org.omg.CORBA.TypeCode): void
                public abstract extract_string(): string
                public abstract insert_string(arg0: java.lang.String | string): void
                public abstract extract_wstring(): string
                public abstract insert_wstring(arg0: java.lang.String | string): void
                public abstract extract_TypeCode(): org.omg.CORBA.TypeCode
                public abstract insert_TypeCode(arg0: org.omg.CORBA.TypeCode): void
                public extract_Principal(): org.omg.CORBA.Principal
                public insert_Principal(arg0: org.omg.CORBA.Principal): void
                public extract_Streamable(): org.omg.CORBA.portable.Streamable
                public insert_Streamable(arg0: org.omg.CORBA.portable.Streamable): void
                public extract_fixed(): java.math.BigDecimal
                public insert_fixed(arg0: java.math.BigDecimal): void
                public insert_fixed(arg0: java.math.BigDecimal, arg1: org.omg.CORBA.TypeCode): void
                public static class: java.lang.Class<any>
            }
        }
    }
}