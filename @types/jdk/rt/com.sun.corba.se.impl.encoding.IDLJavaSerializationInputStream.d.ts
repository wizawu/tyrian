declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
class IDLJavaSerializationInputStream extends com.sun.corba.se.impl.encoding.CDRInputStreamBase {
    protected wrapper: com.sun.corba.se.impl.logging.ORBUtilSystemException
    public constructor(arg0: byte)
    public init(arg0: org.omg.CORBA.ORB, arg1: java.nio.ByteBuffer, arg2: int, arg3: boolean, arg4: com.sun.corba.se.impl.encoding.BufferManagerRead): void
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
    public read_fixed(): java.math.BigDecimal
    public read_Object(arg0: java.lang.Class): org.omg.CORBA.Object
    public orb(): org.omg.CORBA.ORB
    public read_value(): java.io.Serializable
    public read_value(arg0: java.lang.Class): java.io.Serializable
    public read_value(arg0: org.omg.CORBA.portable.BoxedValueHelper): java.io.Serializable
    public read_value(arg0: java.lang.String | string): java.io.Serializable
    public read_value(arg0: java.io.Serializable): java.io.Serializable
    public read_abstract_interface(): java.lang.Object
    public read_abstract_interface(arg0: java.lang.Class): java.lang.Object
    public consumeEndian(): void
    public getPosition(): int
    public read_Abstract(): java.lang.Object
    public read_Value(): java.io.Serializable
    public read_any_array(arg0: org.omg.CORBA.AnySeqHolder, arg1: int, arg2: int): void
    public read_boolean_array(arg0: org.omg.CORBA.BooleanSeqHolder, arg1: int, arg2: int): void
    public read_char_array(arg0: org.omg.CORBA.CharSeqHolder, arg1: int, arg2: int): void
    public read_wchar_array(arg0: org.omg.CORBA.WCharSeqHolder, arg1: int, arg2: int): void
    public read_octet_array(arg0: org.omg.CORBA.OctetSeqHolder, arg1: int, arg2: int): void
    public read_short_array(arg0: org.omg.CORBA.ShortSeqHolder, arg1: int, arg2: int): void
    public read_ushort_array(arg0: org.omg.CORBA.UShortSeqHolder, arg1: int, arg2: int): void
    public read_long_array(arg0: org.omg.CORBA.LongSeqHolder, arg1: int, arg2: int): void
    public read_ulong_array(arg0: org.omg.CORBA.ULongSeqHolder, arg1: int, arg2: int): void
    public read_ulonglong_array(arg0: org.omg.CORBA.ULongLongSeqHolder, arg1: int, arg2: int): void
    public read_longlong_array(arg0: org.omg.CORBA.LongLongSeqHolder, arg1: int, arg2: int): void
    public read_float_array(arg0: org.omg.CORBA.FloatSeqHolder, arg1: int, arg2: int): void
    public read_double_array(arg0: org.omg.CORBA.DoubleSeqHolder, arg1: int, arg2: int): void
    public _truncatable_ids(): java.lang.String[]
    public mark(arg0: int): void
    public reset(): void
    public markSupported(): boolean
    public dup(): com.sun.corba.se.impl.encoding.CDRInputStreamBase
    public read_fixed(arg0: short, arg1: short): java.math.BigDecimal
    public isLittleEndian(): boolean
    public getByteBuffer(): java.nio.ByteBuffer
    public setByteBuffer(arg0: java.nio.ByteBuffer): void
    public setByteBufferWithInfo(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
    public getBufferLength(): int
    public setBufferLength(arg0: int): void
    public getIndex(): int
    public setIndex(arg0: int): void
    public orb(arg0: org.omg.CORBA.ORB): void
    public getBufferManager(): com.sun.corba.se.impl.encoding.BufferManagerRead
    public getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
    public resetCodeSetConverters(): void
    public start_value(): void
    public end_value(): void
    public read_Context(): org.omg.CORBA.Context
    public read(): int
    public setParent(arg0: com.sun.corba.se.impl.encoding.CDRInputStream): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}