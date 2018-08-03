declare namespace org {
    namespace omg {
        namespace CORBA {
            namespace portable {
                abstract class InputStream extends java.io.InputStream {
                    public constructor()
                    public abstract read_boolean(): boolean
                    public abstract read_char(): char
                    public abstract read_wchar(): char
                    public abstract read_octet(): byte
                    public abstract read_short(): short
                    public abstract read_ushort(): short
                    public abstract read_long(): int
                    public abstract read_ulong(): int
                    public abstract read_longlong(): long
                    public abstract read_ulonglong(): long
                    public abstract read_float(): float
                    public abstract read_double(): double
                    public abstract read_string(): string
                    public abstract read_wstring(): string
                    public abstract read_boolean_array(arg0: boolean[], arg1: int, arg2: int): void
                    public abstract read_char_array(arg0: char[], arg1: int, arg2: int): void
                    public abstract read_wchar_array(arg0: char[], arg1: int, arg2: int): void
                    public abstract read_octet_array(arg0: byte[], arg1: int, arg2: int): void
                    public abstract read_short_array(arg0: short[], arg1: int, arg2: int): void
                    public abstract read_ushort_array(arg0: short[], arg1: int, arg2: int): void
                    public abstract read_long_array(arg0: int[], arg1: int, arg2: int): void
                    public abstract read_ulong_array(arg0: int[], arg1: int, arg2: int): void
                    public abstract read_longlong_array(arg0: long[], arg1: int, arg2: int): void
                    public abstract read_ulonglong_array(arg0: long[], arg1: int, arg2: int): void
                    public abstract read_float_array(arg0: float[], arg1: int, arg2: int): void
                    public abstract read_double_array(arg0: double[], arg1: int, arg2: int): void
                    public abstract read_Object(): org.omg.CORBA.Object
                    public abstract read_TypeCode(): org.omg.CORBA.TypeCode
                    public abstract read_any(): org.omg.CORBA.Any
                    public read_Principal(): org.omg.CORBA.Principal
                    public read(): int
                    public read_fixed(): java.math.BigDecimal
                    public read_Context(): org.omg.CORBA.Context
                    public read_Object(arg0: java.lang.Class): org.omg.CORBA.Object
                    public orb(): org.omg.CORBA.ORB
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}