declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
class WrapperInputStream extends org.omg.CORBA_2_3.portable.InputStream implements com.sun.corba.se.impl.encoding.TypeCodeReader {
    public constructor(arg0: com.sun.corba.se.impl.encoding.CDRInputStream)
    public read(): int
    public read(arg0: byte[]): int
    public read(arg0: byte[], arg1: int, arg2: int): int
    public skip(arg0: long): long
    public available(): int
    public close(): void
    public mark(arg0: int): void
    public reset(): void
    public markSupported(): boolean
    public getPosition(): int
    public consumeEndian(): void
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
    public read_value(): java.io.Serializable
    public read_TypeCode(): org.omg.CORBA.TypeCode
    public read_any(): org.omg.CORBA.Any
    public read_Principal(): org.omg.CORBA.Principal
    public read_fixed(): java.math.BigDecimal
    public read_Context(): org.omg.CORBA.Context
    public orb(): org.omg.CORBA.ORB
    public addTypeCodeAtPosition(arg0: com.sun.corba.se.impl.corba.TypeCodeImpl, arg1: int): void
    public getTypeCodeAtPosition(arg0: int): com.sun.corba.se.impl.corba.TypeCodeImpl
    public setEnclosingInputStream(arg0: org.omg.CORBA_2_3.portable.InputStream): void
    public getTopLevelStream(): com.sun.corba.se.impl.encoding.TypeCodeReader
    public getTopLevelPosition(): int
    public performORBVersionSpecificInit(): void
    public resetCodeSetConverters(): void
    public printTypeMap(): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}