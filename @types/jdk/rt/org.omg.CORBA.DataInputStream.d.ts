declare namespace org {
    namespace omg {
        namespace CORBA {
            interface DataInputStream extends org.omg.CORBA.portable.ValueBase {
                read_any(): org.omg.CORBA.Any
                read_boolean(): boolean
                read_char(): char
                read_wchar(): char
                read_octet(): byte
                read_short(): short
                read_ushort(): short
                read_long(): int
                read_ulong(): int
                read_longlong(): long
                read_ulonglong(): long
                read_float(): float
                read_double(): double
                read_string(): string
                read_wstring(): string
                read_Object(): org.omg.CORBA.Object
                read_Abstract(): java.lang.Object
                read_Value(): java.io.Serializable
                read_TypeCode(): org.omg.CORBA.TypeCode
                read_any_array(arg0: org.omg.CORBA.AnySeqHolder, arg1: int, arg2: int): void
                read_boolean_array(arg0: org.omg.CORBA.BooleanSeqHolder, arg1: int, arg2: int): void
                read_char_array(arg0: org.omg.CORBA.CharSeqHolder, arg1: int, arg2: int): void
                read_wchar_array(arg0: org.omg.CORBA.WCharSeqHolder, arg1: int, arg2: int): void
                read_octet_array(arg0: org.omg.CORBA.OctetSeqHolder, arg1: int, arg2: int): void
                read_short_array(arg0: org.omg.CORBA.ShortSeqHolder, arg1: int, arg2: int): void
                read_ushort_array(arg0: org.omg.CORBA.UShortSeqHolder, arg1: int, arg2: int): void
                read_long_array(arg0: org.omg.CORBA.LongSeqHolder, arg1: int, arg2: int): void
                read_ulong_array(arg0: org.omg.CORBA.ULongSeqHolder, arg1: int, arg2: int): void
                read_ulonglong_array(arg0: org.omg.CORBA.ULongLongSeqHolder, arg1: int, arg2: int): void
                read_longlong_array(arg0: org.omg.CORBA.LongLongSeqHolder, arg1: int, arg2: int): void
                read_float_array(arg0: org.omg.CORBA.FloatSeqHolder, arg1: int, arg2: int): void
                read_double_array(arg0: org.omg.CORBA.DoubleSeqHolder, arg1: int, arg2: int): void
            }
        }
    }
}