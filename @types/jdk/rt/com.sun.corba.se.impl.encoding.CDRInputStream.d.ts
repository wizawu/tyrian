declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
abstract class CDRInputStream extends org.omg.CORBA_2_3.portable.InputStream implements com.sun.corba.se.impl.encoding.MarshalInputStream , org.omg.CORBA.DataInputStream , org.omg.CORBA.portable.ValueInputStream {
    protected messageMediator: com.sun.corba.se.spi.protocol.CorbaMessageMediator
    public constructor()
    public constructor(arg0: com.sun.corba.se.impl.encoding.CDRInputStream)
    public constructor(arg0: org.omg.CORBA.ORB, arg1: java.nio.ByteBuffer, arg2: int, arg3: boolean, arg4: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg5: byte, arg6: com.sun.corba.se.impl.encoding.BufferManagerRead)
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
    public read(arg0: byte[]): int
    public read(arg0: byte[], arg1: int, arg2: int): int
    public skip(arg0: long): long
    public available(): int
    public close(): void
    public mark(arg0: int): void
    public reset(): void
    public markSupported(): boolean
    public dup(): com.sun.corba.se.impl.encoding.CDRInputStream
    public read_fixed(arg0: short, arg1: short): java.math.BigDecimal
    public isLittleEndian(): boolean
    protected getByteBuffer(): java.nio.ByteBuffer
    protected setByteBuffer(arg0: java.nio.ByteBuffer): void
    protected setByteBufferWithInfo(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
    protected isSharing(arg0: java.nio.ByteBuffer): boolean
    public getBufferLength(): int
    protected setBufferLength(arg0: int): void
    protected getIndex(): int
    protected setIndex(arg0: int): void
    public orb(arg0: org.omg.CORBA.ORB): void
    public getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
    public getBufferManager(): com.sun.corba.se.impl.encoding.BufferManagerRead
    public getCodeBase(): com.sun.org.omg.SendingContext.CodeBase
    protected createCharBTCConverter(): com.sun.corba.se.impl.encoding.CodeSetConversion$BTCConverter
    protected createWCharBTCConverter(): com.sun.corba.se.impl.encoding.CodeSetConversion$BTCConverter
    public alignOnBoundary(arg0: int): void
    public setHeaderPadding(arg0: boolean): void
    public performORBVersionSpecificInit(): void
    public resetCodeSetConverters(): void
    public setMessageMediator(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
    public getMessageMediator(): com.sun.corba.se.pept.protocol.MessageMediator
    public start_value(): void
    public end_value(): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}