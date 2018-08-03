declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        abstract class CDROutputStream extends org.omg.CORBA_2_3.portable.OutputStream implements com.sun.corba.se.impl.encoding.MarshalOutputStream , org.omg.CORBA.DataOutputStream , org.omg.CORBA.portable.ValueOutputStream {
                            protected orb: com.sun.corba.se.spi.orb.ORB
                            protected wrapper: com.sun.corba.se.impl.logging.ORBUtilSystemException
                            protected corbaMessageMediator: com.sun.corba.se.spi.protocol.CorbaMessageMediator
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg2: byte, arg3: boolean, arg4: com.sun.corba.se.impl.encoding.BufferManagerWrite, arg5: byte, arg6: boolean)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg2: byte, arg3: boolean, arg4: com.sun.corba.se.impl.encoding.BufferManagerWrite, arg5: byte)
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
                            public write_value(arg0: java.io.Serializable): void
                            public write_value(arg0: java.io.Serializable, arg1: java.lang.Class): void
                            public write_value(arg0: java.io.Serializable, arg1: java.lang.String | string): void
                            public write_value(arg0: java.io.Serializable, arg1: org.omg.CORBA.portable.BoxedValueHelper): void
                            public write_abstract_interface(arg0: java.lang.Object): void
                            public write(arg0: byte[]): void
                            public write(arg0: byte[], arg1: int, arg2: int): void
                            public flush(): void
                            public close(): void
                            public start_block(): void
                            public end_block(): void
                            public putEndian(): void
                            public writeTo(arg0: java.io.OutputStream): void
                            public toByteArray(): byte[]
                            public write_Abstract(arg0: java.lang.Object): void
                            public write_Value(arg0: java.io.Serializable): void
                            public write_any_array(arg0: org.omg.CORBA.Any[], arg1: int, arg2: int): void
                            public setMessageMediator(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
                            public getMessageMediator(): com.sun.corba.se.pept.protocol.MessageMediator
                            public _truncatable_ids(): java.lang.String[]
                            protected getSize(): int
                            protected getIndex(): int
                            protected getRealIndex(arg0: int): int
                            protected setIndex(arg0: int): void
                            protected getByteBuffer(): java.nio.ByteBuffer
                            protected setByteBuffer(arg0: java.nio.ByteBuffer): void
                            protected isSharing(arg0: java.nio.ByteBuffer): boolean
                            public isLittleEndian(): boolean
                            public getByteBufferWithInfo(): com.sun.corba.se.impl.encoding.ByteBufferWithInfo
                            protected setByteBufferWithInfo(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
                            public getBufferManager(): com.sun.corba.se.impl.encoding.BufferManagerWrite
                            public write_fixed(arg0: java.math.BigDecimal, arg1: short, arg2: short): void
                            public writeOctetSequenceTo(arg0: org.omg.CORBA.portable.OutputStream): void
                            public getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
                            public writeIndirection(arg0: int, arg1: int): void
                            protected createCharCTBConverter(): com.sun.corba.se.impl.encoding.CodeSetConversion$CTBConverter
                            protected createWCharCTBConverter(): com.sun.corba.se.impl.encoding.CodeSetConversion$CTBConverter
                            protected freeInternalCaches(): void
                            public alignOnBoundary(arg0: int): void
                            public setHeaderPadding(arg0: boolean): void
                            public start_value(arg0: java.lang.String | string): void
                            public end_value(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}