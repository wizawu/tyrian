declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        abstract class CDRInputStreamBase extends java.io.InputStream {
                            protected parent: com.sun.corba.se.impl.encoding.CDRInputStream
                            public setParent(arg0: com.sun.corba.se.impl.encoding.CDRInputStream): void
                            public abstract init(arg0: org.omg.CORBA.ORB, arg1: java.nio.ByteBuffer, arg2: int, arg3: boolean, arg4: com.sun.corba.se.impl.encoding.BufferManagerRead): void
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
                            public abstract read_Principal(): org.omg.CORBA.Principal
                            public read(): int
                            public abstract read_fixed(): java.math.BigDecimal
                            public read_Context(): org.omg.CORBA.Context
                            public abstract read_Object(arg0: java.lang.Class): org.omg.CORBA.Object
                            public abstract orb(): org.omg.CORBA.ORB
                            public abstract read_value(): java.io.Serializable
                            public abstract read_value(arg0: java.lang.Class): java.io.Serializable
                            public abstract read_value(arg0: org.omg.CORBA.portable.BoxedValueHelper): java.io.Serializable
                            public abstract read_value(arg0: java.lang.String | string): java.io.Serializable
                            public abstract read_value(arg0: java.io.Serializable): java.io.Serializable
                            public abstract read_abstract_interface(): java.lang.Object
                            public abstract read_abstract_interface(arg0: java.lang.Class): java.lang.Object
                            public abstract consumeEndian(): void
                            public abstract getPosition(): int
                            public abstract read_Abstract(): java.lang.Object
                            public abstract read_Value(): java.io.Serializable
                            public abstract read_any_array(arg0: org.omg.CORBA.AnySeqHolder, arg1: int, arg2: int): void
                            public abstract read_boolean_array(arg0: org.omg.CORBA.BooleanSeqHolder, arg1: int, arg2: int): void
                            public abstract read_char_array(arg0: org.omg.CORBA.CharSeqHolder, arg1: int, arg2: int): void
                            public abstract read_wchar_array(arg0: org.omg.CORBA.WCharSeqHolder, arg1: int, arg2: int): void
                            public abstract read_octet_array(arg0: org.omg.CORBA.OctetSeqHolder, arg1: int, arg2: int): void
                            public abstract read_short_array(arg0: org.omg.CORBA.ShortSeqHolder, arg1: int, arg2: int): void
                            public abstract read_ushort_array(arg0: org.omg.CORBA.UShortSeqHolder, arg1: int, arg2: int): void
                            public abstract read_long_array(arg0: org.omg.CORBA.LongSeqHolder, arg1: int, arg2: int): void
                            public abstract read_ulong_array(arg0: org.omg.CORBA.ULongSeqHolder, arg1: int, arg2: int): void
                            public abstract read_ulonglong_array(arg0: org.omg.CORBA.ULongLongSeqHolder, arg1: int, arg2: int): void
                            public abstract read_longlong_array(arg0: org.omg.CORBA.LongLongSeqHolder, arg1: int, arg2: int): void
                            public abstract read_float_array(arg0: org.omg.CORBA.FloatSeqHolder, arg1: int, arg2: int): void
                            public abstract read_double_array(arg0: org.omg.CORBA.DoubleSeqHolder, arg1: int, arg2: int): void
                            public abstract _truncatable_ids(): java.lang.String[]
                            public abstract mark(arg0: int): void
                            public abstract reset(): void
                            public markSupported(): boolean
                            public abstract dup(): com.sun.corba.se.impl.encoding.CDRInputStreamBase
                            public abstract read_fixed(arg0: short, arg1: short): java.math.BigDecimal
                            public abstract isLittleEndian(): boolean
                            public abstract getByteBuffer(): java.nio.ByteBuffer
                            public abstract setByteBuffer(arg0: java.nio.ByteBuffer): void
                            public abstract setByteBufferWithInfo(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
                            public abstract getBufferLength(): int
                            public abstract setBufferLength(arg0: int): void
                            public abstract getIndex(): int
                            public abstract setIndex(arg0: int): void
                            public abstract orb(arg0: org.omg.CORBA.ORB): void
                            public abstract getBufferManager(): com.sun.corba.se.impl.encoding.BufferManagerRead
                            public abstract getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
                            public abstract resetCodeSetConverters(): void
                            public abstract start_value(): void
                            public abstract end_value(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}