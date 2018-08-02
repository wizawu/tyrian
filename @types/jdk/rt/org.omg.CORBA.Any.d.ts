declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class Any implements org.omg.CORBA.portable.IDLEntity {
                public constructor()
                public equal(arg0: org.omg.CORBA.Any): boolean
                public type(): org.omg.CORBA.TypeCode
                public type(arg0: org.omg.CORBA.TypeCode): void
                public read_value(arg0: org.omg.CORBA.portable.InputStream, arg1: org.omg.CORBA.TypeCode): void
                public write_value(arg0: org.omg.CORBA.portable.OutputStream): void
                public create_output_stream(): org.omg.CORBA.portable.OutputStream
                public create_input_stream(): org.omg.CORBA.portable.InputStream
                public extract_short(): short
                public insert_short(arg0: short): void
                public extract_long(): int
                public insert_long(arg0: int): void
                public extract_longlong(): long
                public insert_longlong(arg0: long): void
                public extract_ushort(): short
                public insert_ushort(arg0: short): void
                public extract_ulong(): int
                public insert_ulong(arg0: int): void
                public extract_ulonglong(): long
                public insert_ulonglong(arg0: long): void
                public extract_float(): float
                public insert_float(arg0: float): void
                public extract_double(): double
                public insert_double(arg0: double): void
                public extract_boolean(): boolean
                public insert_boolean(arg0: boolean): void
                public extract_char(): char
                public insert_char(arg0: char): void
                public extract_wchar(): char
                public insert_wchar(arg0: char): void
                public extract_octet(): byte
                public insert_octet(arg0: byte): void
                public extract_any(): org.omg.CORBA.Any
                public insert_any(arg0: org.omg.CORBA.Any): void
                public extract_Object(): org.omg.CORBA.Object
                public insert_Object(arg0: org.omg.CORBA.Object): void
                public extract_Value(): java.io.Serializable
                public insert_Value(arg0: java.io.Serializable): void
                public insert_Value(arg0: java.io.Serializable, arg1: org.omg.CORBA.TypeCode): void
                public insert_Object(arg0: org.omg.CORBA.Object, arg1: org.omg.CORBA.TypeCode): void
                public extract_string(): string
                public insert_string(arg0: java.lang.String | string): void
                public extract_wstring(): string
                public insert_wstring(arg0: java.lang.String | string): void
                public extract_TypeCode(): org.omg.CORBA.TypeCode
                public insert_TypeCode(arg0: org.omg.CORBA.TypeCode): void
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