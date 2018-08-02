declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        interface MarshalInputStream {
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
                            read_boolean_array(arg0: boolean[], arg1: int, arg2: int): void
                            read_char_array(arg0: char[], arg1: int, arg2: int): void
                            read_wchar_array(arg0: char[], arg1: int, arg2: int): void
                            read_octet_array(arg0: byte[], arg1: int, arg2: int): void
                            read_short_array(arg0: short[], arg1: int, arg2: int): void
                            read_ushort_array(arg0: short[], arg1: int, arg2: int): void
                            read_long_array(arg0: int[], arg1: int, arg2: int): void
                            read_ulong_array(arg0: int[], arg1: int, arg2: int): void
                            read_longlong_array(arg0: long[], arg1: int, arg2: int): void
                            read_ulonglong_array(arg0: long[], arg1: int, arg2: int): void
                            read_float_array(arg0: float[], arg1: int, arg2: int): void
                            read_double_array(arg0: double[], arg1: int, arg2: int): void
                            read_Object(): org.omg.CORBA.Object
                            read_TypeCode(): org.omg.CORBA.TypeCode
                            read_any(): org.omg.CORBA.Any
                            read_Principal(): org.omg.CORBA.Principal
                            read_Object(arg0: java.lang.Class): org.omg.CORBA.Object
                            read_value(): java.io.Serializable
                            consumeEndian(): void
                            getPosition(): int
                            mark(arg0: int): void
                            reset(): void
                            performORBVersionSpecificInit(): void
                            resetCodeSetConverters(): void
                        }
                    }
                }
            }
        }
    }
}