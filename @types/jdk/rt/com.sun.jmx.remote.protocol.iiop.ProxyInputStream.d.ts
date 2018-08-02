declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace protocol {
                    namespace iiop {
class ProxyInputStream extends org.omg.CORBA_2_3.portable.InputStream {
    protected in: org.omg.CORBA.portable.InputStream
    public constructor(arg0: org.omg.CORBA.portable.InputStream)
    public read_boolean(): boolean
    public read_char(): char
    public read_wchar(): char
    public read_octet(): byte
    public read_short(): short
    public read_ushort(): short
    public read_long(): int
    public read_ulong(): int
    public read_longlong(): long
    public read_ulonglong(): long
    public read_float(): float
    public read_double(): double
    public read_string(): string
    public read_wstring(): string
    public read_boolean_array(arg0: boolean[], arg1: int, arg2: int): void
    public read_char_array(arg0: char[], arg1: int, arg2: int): void
    public read_wchar_array(arg0: char[], arg1: int, arg2: int): void
    public read_octet_array(arg0: byte[], arg1: int, arg2: int): void
    public read_short_array(arg0: short[], arg1: int, arg2: int): void
    public read_ushort_array(arg0: short[], arg1: int, arg2: int): void
    public read_long_array(arg0: int[], arg1: int, arg2: int): void
    public read_ulong_array(arg0: int[], arg1: int, arg2: int): void
    public read_longlong_array(arg0: long[], arg1: int, arg2: int): void
    public read_ulonglong_array(arg0: long[], arg1: int, arg2: int): void
    public read_float_array(arg0: float[], arg1: int, arg2: int): void
    public read_double_array(arg0: double[], arg1: int, arg2: int): void
    public read_Object(): org.omg.CORBA.Object
    public read_TypeCode(): org.omg.CORBA.TypeCode
    public read_any(): org.omg.CORBA.Any
    public read_Principal(): org.omg.CORBA.Principal
    public read(): int
    public read_fixed(): java.math.BigDecimal
    public read_Context(): org.omg.CORBA.Context
    public read_Object(arg0: java.lang.Class): org.omg.CORBA.Object
    public orb(): org.omg.CORBA.ORB
    public read_value(): java.io.Serializable
    public read_value(arg0: java.lang.Class): java.io.Serializable
    public read_value(arg0: org.omg.CORBA.portable.BoxedValueHelper): java.io.Serializable
    public read_value(arg0: java.lang.String | string): java.io.Serializable
    public read_value(arg0: java.io.Serializable): java.io.Serializable
    public read_abstract_interface(): java.lang.Object
    public read_abstract_interface(arg0: java.lang.Class): java.lang.Object
    protected narrow(): org.omg.CORBA_2_3.portable.InputStream
    public getProxiedInputStream(): org.omg.CORBA.portable.InputStream
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}