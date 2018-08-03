declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        class CDROutputStream_1_0 extends com.sun.corba.se.impl.encoding.CDROutputStreamBase {
                            protected littleEndian: boolean
                            protected bufferManagerWrite: com.sun.corba.se.impl.encoding.BufferManagerWrite
                            protected orb: com.sun.corba.se.spi.orb.ORB
                            protected wrapper: com.sun.corba.se.impl.logging.ORBUtilSystemException
                            protected debug: boolean
                            protected blockSizeIndex: int
                            protected blockSizePosition: int
                            protected streamFormatVersion: byte
                            protected inBlock: boolean
                            public constructor()
                            public init(arg0: org.omg.CORBA.ORB, arg1: boolean, arg2: com.sun.corba.se.impl.encoding.BufferManagerWrite, arg3: byte, arg4: boolean): void
                            public init(arg0: org.omg.CORBA.ORB, arg1: boolean, arg2: com.sun.corba.se.impl.encoding.BufferManagerWrite, arg3: byte): void
                            public getBufferManager(): com.sun.corba.se.impl.encoding.BufferManagerWrite
                            public toByteArray(): byte[]
                            public getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
                            protected handleSpecialChunkBegin(arg0: int): void
                            protected handleSpecialChunkEnd(): void
                            protected computeAlignment(arg0: int): int
                            protected alignAndReserve(arg0: int, arg1: int): void
                            protected grow(arg0: int, arg1: int): void
                            public putEndian(): void
                            public littleEndian(): boolean
                            public write_longdouble(arg0: double): void
                            public write_octet(arg0: byte): void
                            public write_boolean(arg0: boolean): void
                            public write_char(arg0: char): void
                            public write_wchar(arg0: char): void
                            public write_short(arg0: short): void
                            public write_ushort(arg0: short): void
                            public write_long(arg0: int): void
                            public write_ulong(arg0: int): void
                            public write_longlong(arg0: long): void
                            public write_ulonglong(arg0: long): void
                            public write_float(arg0: float): void
                            public write_double(arg0: double): void
                            public write_string(arg0: java.lang.String | string): void
                            protected writeString(arg0: java.lang.String | string): int
                            public write_wstring(arg0: java.lang.String | string): void
                            public write_octet_array(arg0: byte[], arg1: int, arg2: int): void
                            public write_Principal(arg0: org.omg.CORBA.Principal): void
                            public write_any(arg0: org.omg.CORBA.Any): void
                            public write_TypeCode(arg0: org.omg.CORBA.TypeCode): void
                            public write_Object(arg0: org.omg.CORBA.Object): void
                            public write_abstract_interface(arg0: java.lang.Object): void
                            public write_value(arg0: java.io.Serializable, arg1: java.lang.Class): void
                            public write_value(arg0: java.io.Serializable, arg1: java.lang.String | string): void
                            public write_value(arg0: java.io.Serializable): void
                            public write_value(arg0: java.io.Serializable, arg1: org.omg.CORBA.portable.BoxedValueHelper): void
                            public get_offset(): int
                            public start_block(): void
                            protected writeLongWithoutAlign(arg0: int): void
                            public end_block(): void
                            public orb(): org.omg.CORBA.ORB
                            public write_boolean_array(arg0: boolean[], arg1: int, arg2: int): void
                            public write_char_array(arg0: char[], arg1: int, arg2: int): void
                            public write_wchar_array(arg0: char[], arg1: int, arg2: int): void
                            public write_short_array(arg0: short[], arg1: int, arg2: int): void
                            public write_ushort_array(arg0: short[], arg1: int, arg2: int): void
                            public write_long_array(arg0: int[], arg1: int, arg2: int): void
                            public write_ulong_array(arg0: int[], arg1: int, arg2: int): void
                            public write_longlong_array(arg0: long[], arg1: int, arg2: int): void
                            public write_ulonglong_array(arg0: long[], arg1: int, arg2: int): void
                            public write_float_array(arg0: float[], arg1: int, arg2: int): void
                            public write_double_array(arg0: double[], arg1: int, arg2: int): void
                            public write_string_array(arg0: java.lang.String[], arg1: int, arg2: int): void
                            public write_wstring_array(arg0: java.lang.String[], arg1: int, arg2: int): void
                            public write_any_array(arg0: org.omg.CORBA.Any[], arg1: int, arg2: int): void
                            public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            public writeOctetSequenceTo(arg0: org.omg.CORBA.portable.OutputStream): void
                            public getSize(): int
                            public getIndex(): int
                            public isLittleEndian(): boolean
                            public setIndex(arg0: int): void
                            public getByteBufferWithInfo(): com.sun.corba.se.impl.encoding.ByteBufferWithInfo
                            public setByteBufferWithInfo(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
                            public getByteBuffer(): java.nio.ByteBuffer
                            public setByteBuffer(arg0: java.nio.ByteBuffer): void
                            public write_Abstract(arg0: java.lang.Object): void
                            public write_Value(arg0: java.io.Serializable): void
                            public write_fixed(arg0: java.math.BigDecimal, arg1: short, arg2: short): void
                            public write_fixed(arg0: java.math.BigDecimal): void
                            public write_fixed(arg0: java.lang.String | string, arg1: int): void
                            public _truncatable_ids(): java.lang.String[]
                            public printBuffer(): void
                            public static printBuffer(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
                            public writeIndirection(arg0: int, arg1: int): void
                            protected getCharConverter(): com.sun.corba.se.impl.encoding.CodeSetConversion$CTBConverter
                            protected getWCharConverter(): com.sun.corba.se.impl.encoding.CodeSetConversion$CTBConverter
                            protected dprint(arg0: java.lang.String | string): void
                            public start_value(arg0: java.lang.String | string): void
                            public end_value(): void
                            public close(): void
                            public write_Context(arg0: org.omg.CORBA.Context, arg1: org.omg.CORBA.ContextList): void
                            public write(arg0: int): void
                            public init(arg0: org.omg.CORBA.ORB, arg1: com.sun.corba.se.impl.encoding.BufferManagerWrite, arg2: byte): void
                            public setParent(arg0: com.sun.corba.se.impl.encoding.CDROutputStream): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}