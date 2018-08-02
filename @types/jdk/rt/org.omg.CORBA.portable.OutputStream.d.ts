declare namespace org {
    namespace omg {
        namespace CORBA {
            namespace portable {
abstract class OutputStream extends java.io.OutputStream {
    public constructor()
    public create_input_stream(): org.omg.CORBA.portable.InputStream
    public write_boolean(arg0: boolean): void
    public write_char(arg0: char): void
    public write_wchar(arg0: char): void
    public write_octet(arg0: byte): void
    public write_short(arg0: short): void
    public write_ushort(arg0: short): void
    public write_long(arg0: int): void
    public write_ulong(arg0: int): void
    public write_longlong(arg0: long): void
    public write_ulonglong(arg0: long): void
    public write_float(arg0: float): void
    public write_double(arg0: double): void
    public write_string(arg0: java.lang.String | string): void
    public write_wstring(arg0: java.lang.String | string): void
    public write_boolean_array(arg0: boolean[], arg1: int, arg2: int): void
    public write_char_array(arg0: char[], arg1: int, arg2: int): void
    public write_wchar_array(arg0: char[], arg1: int, arg2: int): void
    public write_octet_array(arg0: byte[], arg1: int, arg2: int): void
    public write_short_array(arg0: short[], arg1: int, arg2: int): void
    public write_ushort_array(arg0: short[], arg1: int, arg2: int): void
    public write_long_array(arg0: int[], arg1: int, arg2: int): void
    public write_ulong_array(arg0: int[], arg1: int, arg2: int): void
    public write_longlong_array(arg0: long[], arg1: int, arg2: int): void
    public write_ulonglong_array(arg0: long[], arg1: int, arg2: int): void
    public write_float_array(arg0: float[], arg1: int, arg2: int): void
    public write_double_array(arg0: double[], arg1: int, arg2: int): void
    public write_Object(arg0: org.omg.CORBA.Object): void
    public write_TypeCode(arg0: org.omg.CORBA.TypeCode): void
    public write_any(arg0: org.omg.CORBA.Any): void
    public write_Principal(arg0: org.omg.CORBA.Principal): void
    public write(arg0: int): void
    public write_fixed(arg0: java.math.BigDecimal): void
    public write_Context(arg0: org.omg.CORBA.Context, arg1: org.omg.CORBA.ContextList): void
    public orb(): org.omg.CORBA.ORB
    public static class: java.lang.Class<any>
}

            }
        }
    }
}