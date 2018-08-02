declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace corba {
                        class TypeCodeImpl extends org.omg.CORBA.TypeCode {
                            protected static tk_indirect: int
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.TypeCode)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: org.omg.CORBA.StructMember[])
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: org.omg.CORBA.TypeCode, arg5: org.omg.CORBA.UnionMember[])
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: short, arg5: org.omg.CORBA.TypeCode, arg6: org.omg.CORBA.ValueMember[])
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String[])
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: org.omg.CORBA.TypeCode)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int, arg2: int)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int, arg2: int, arg3: org.omg.CORBA.TypeCode)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int, arg2: int, arg3: int)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int, arg2: short, arg3: short)
                            protected static convertToNative(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.TypeCode): com.sun.corba.se.impl.corba.TypeCodeImpl
                            public static newOutputStream(arg0: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.impl.encoding.CDROutputStream
                            public equal(arg0: org.omg.CORBA.TypeCode): boolean
                            public equivalent(arg0: org.omg.CORBA.TypeCode): boolean
                            public get_compact_typecode(): org.omg.CORBA.TypeCode
                            public kind(): org.omg.CORBA.TCKind
                            public is_recursive(): boolean
                            public id(): string
                            public name(): string
                            public member_count(): int
                            public member_name(arg0: int): string
                            public member_type(arg0: int): org.omg.CORBA.TypeCode
                            public member_label(arg0: int): org.omg.CORBA.Any
                            public discriminator_type(): org.omg.CORBA.TypeCode
                            public default_index(): int
                            public length(): int
                            public content_type(): org.omg.CORBA.TypeCode
                            public fixed_digits(): short
                            public fixed_scale(): short
                            public member_visibility(arg0: int): short
                            public type_modifier(): short
                            public concrete_base_type(): org.omg.CORBA.TypeCode
                            public read_value(arg0: org.omg.CORBA_2_3.portable.InputStream): void
                            public write_value(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
                            public write_value(arg0: com.sun.corba.se.impl.encoding.TypeCodeOutputStream): void
                            protected copy(arg0: org.omg.CORBA.portable.InputStream, arg1: org.omg.CORBA.portable.OutputStream): void
                            protected static digits(arg0: java.math.BigDecimal): short
                            protected static scale(arg0: java.math.BigDecimal): short
                            public description(): string
                            public toString(): string
                            public printStream(arg0: java.io.PrintStream): void
                            protected setCaching(arg0: boolean): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}