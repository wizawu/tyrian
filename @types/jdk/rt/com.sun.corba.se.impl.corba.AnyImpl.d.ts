declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace corba {
                        class AnyImpl extends org.omg.CORBA.Any {
                            protected orb: com.sun.corba.se.spi.orb.ORB
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.Any)
                            public type(): org.omg.CORBA.TypeCode
                            public type(arg0: org.omg.CORBA.TypeCode): void
                            public equal(arg0: org.omg.CORBA.Any): boolean
                            public create_output_stream(): org.omg.CORBA.portable.OutputStream
                            public create_input_stream(): org.omg.CORBA.portable.InputStream
                            public read_value(arg0: org.omg.CORBA.portable.InputStream, arg1: org.omg.CORBA.TypeCode): void
                            public write_value(arg0: org.omg.CORBA.portable.OutputStream): void
                            public insert_Streamable(arg0: org.omg.CORBA.portable.Streamable): void
                            public extract_Streamable(): org.omg.CORBA.portable.Streamable
                            public insert_short(arg0: short): void
                            public extract_short(): short
                            public insert_long(arg0: int): void
                            public extract_long(): int
                            public insert_ushort(arg0: short): void
                            public extract_ushort(): short
                            public insert_ulong(arg0: int): void
                            public extract_ulong(): int
                            public insert_float(arg0: float): void
                            public extract_float(): float
                            public insert_double(arg0: double): void
                            public extract_double(): double
                            public insert_longlong(arg0: long): void
                            public extract_longlong(): long
                            public insert_ulonglong(arg0: long): void
                            public extract_ulonglong(): long
                            public insert_boolean(arg0: boolean): void
                            public extract_boolean(): boolean
                            public insert_char(arg0: char): void
                            public extract_char(): char
                            public insert_wchar(arg0: char): void
                            public extract_wchar(): char
                            public insert_octet(arg0: byte): void
                            public extract_octet(): byte
                            public insert_string(arg0: java.lang.String | string): void
                            public extract_string(): string
                            public insert_wstring(arg0: java.lang.String | string): void
                            public extract_wstring(): string
                            public insert_any(arg0: org.omg.CORBA.Any): void
                            public extract_any(): org.omg.CORBA.Any
                            public insert_Object(arg0: org.omg.CORBA.Object): void
                            public insert_Object(arg0: org.omg.CORBA.Object, arg1: org.omg.CORBA.TypeCode): void
                            public extract_Object(): org.omg.CORBA.Object
                            public insert_TypeCode(arg0: org.omg.CORBA.TypeCode): void
                            public extract_TypeCode(): org.omg.CORBA.TypeCode
                            public insert_Principal(arg0: org.omg.CORBA.Principal): void
                            public extract_Principal(): org.omg.CORBA.Principal
                            public extract_Value(): java.io.Serializable
                            public insert_Value(arg0: java.io.Serializable): void
                            public insert_Value(arg0: java.io.Serializable, arg1: org.omg.CORBA.TypeCode): void
                            public insert_fixed(arg0: java.math.BigDecimal): void
                            public insert_fixed(arg0: java.math.BigDecimal, arg1: org.omg.CORBA.TypeCode): void
                            public extract_fixed(): java.math.BigDecimal
                            public createTypeCodeForClass(arg0: java.lang.Class, arg1: com.sun.corba.se.spi.orb.ORB): org.omg.CORBA.TypeCode
                            public extractAny(arg0: org.omg.CORBA.TypeCode, arg1: com.sun.corba.se.spi.orb.ORB): org.omg.CORBA.Any
                            public static extractAnyFromStream(arg0: org.omg.CORBA.TypeCode, arg1: org.omg.CORBA.portable.InputStream, arg2: com.sun.corba.se.spi.orb.ORB): org.omg.CORBA.Any
                            public isInitialized(): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}