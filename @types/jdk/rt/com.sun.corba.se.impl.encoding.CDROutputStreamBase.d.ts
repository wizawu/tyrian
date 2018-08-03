declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        abstract class CDROutputStreamBase extends java.io.OutputStream {
                            protected parent: com.sun.corba.se.impl.encoding.CDROutputStream
                            public setParent(arg0: com.sun.corba.se.impl.encoding.CDROutputStream): void
                            public init(arg0: org.omg.CORBA.ORB, arg1: com.sun.corba.se.impl.encoding.BufferManagerWrite, arg2: byte): void
                            protected abstract init(arg0: org.omg.CORBA.ORB, arg1: boolean, arg2: com.sun.corba.se.impl.encoding.BufferManagerWrite, arg3: byte, arg4: boolean): void
                            public abstract write_boolean(arg0: boolean): void
                            public abstract write_char(arg0: char): void
                            public abstract write_wchar(arg0: char): void
                            public abstract write_octet(arg0: byte): void
                            public abstract write_short(arg0: short): void
                            public abstract write_ushort(arg0: short): void
                            public abstract write_long(arg0: int): void
                            public abstract write_ulong(arg0: int): void
                            public abstract write_longlong(arg0: long): void
                            public abstract write_ulonglong(arg0: long): void
                            public abstract write_float(arg0: float): void
                            public abstract write_double(arg0: double): void
                            public abstract write_string(arg0: java.lang.String | string): void
                            public abstract write_wstring(arg0: java.lang.String | string): void
                            public abstract write_boolean_array(arg0: boolean[], arg1: int, arg2: int): void
                            public abstract write_char_array(arg0: char[], arg1: int, arg2: int): void
                            public abstract write_wchar_array(arg0: char[], arg1: int, arg2: int): void
                            public abstract write_octet_array(arg0: byte[], arg1: int, arg2: int): void
                            public abstract write_short_array(arg0: short[], arg1: int, arg2: int): void
                            public abstract write_ushort_array(arg0: short[], arg1: int, arg2: int): void
                            public abstract write_long_array(arg0: int[], arg1: int, arg2: int): void
                            public abstract write_ulong_array(arg0: int[], arg1: int, arg2: int): void
                            public abstract write_longlong_array(arg0: long[], arg1: int, arg2: int): void
                            public abstract write_ulonglong_array(arg0: long[], arg1: int, arg2: int): void
                            public abstract write_float_array(arg0: float[], arg1: int, arg2: int): void
                            public abstract write_double_array(arg0: double[], arg1: int, arg2: int): void
                            public abstract write_Object(arg0: org.omg.CORBA.Object): void
                            public abstract write_TypeCode(arg0: org.omg.CORBA.TypeCode): void
                            public abstract write_any(arg0: org.omg.CORBA.Any): void
                            public abstract write_Principal(arg0: org.omg.CORBA.Principal): void
                            public write(arg0: int): void
                            public abstract write_fixed(arg0: java.math.BigDecimal): void
                            public write_Context(arg0: org.omg.CORBA.Context, arg1: org.omg.CORBA.ContextList): void
                            public abstract orb(): org.omg.CORBA.ORB
                            public abstract write_value(arg0: java.io.Serializable): void
                            public abstract write_value(arg0: java.io.Serializable, arg1: java.lang.Class): void
                            public abstract write_value(arg0: java.io.Serializable, arg1: java.lang.String | string): void
                            public abstract write_value(arg0: java.io.Serializable, arg1: org.omg.CORBA.portable.BoxedValueHelper): void
                            public abstract write_abstract_interface(arg0: java.lang.Object): void
                            public abstract start_block(): void
                            public abstract end_block(): void
                            public abstract putEndian(): void
                            public abstract writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            public abstract toByteArray(): byte[]
                            public abstract write_Abstract(arg0: java.lang.Object): void
                            public abstract write_Value(arg0: java.io.Serializable): void
                            public abstract write_any_array(arg0: org.omg.CORBA.Any[], arg1: int, arg2: int): void
                            public abstract _truncatable_ids(): java.lang.String[]
                            public abstract getSize(): int
                            public abstract getIndex(): int
                            public abstract setIndex(arg0: int): void
                            public abstract getByteBuffer(): java.nio.ByteBuffer
                            public abstract setByteBuffer(arg0: java.nio.ByteBuffer): void
                            public abstract isLittleEndian(): boolean
                            public abstract getByteBufferWithInfo(): com.sun.corba.se.impl.encoding.ByteBufferWithInfo
                            public abstract setByteBufferWithInfo(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
                            public abstract getBufferManager(): com.sun.corba.se.impl.encoding.BufferManagerWrite
                            public abstract write_fixed(arg0: java.math.BigDecimal, arg1: short, arg2: short): void
                            public abstract writeOctetSequenceTo(arg0: org.omg.CORBA.portable.OutputStream): void
                            public abstract getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
                            public abstract writeIndirection(arg0: int, arg1: int): void
                            public abstract start_value(arg0: java.lang.String | string): void
                            public abstract end_value(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}