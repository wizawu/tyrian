declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace dynamicany {
                        class DynEnumImpl extends com.sun.corba.se.impl.dynamicany.DynAnyBasicImpl implements org.omg.DynamicAny.DynEnum {
                            protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.Any, arg2: boolean)
                            protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.TypeCode)
                            public component_count(): int
                            public current_component(): org.omg.DynamicAny.DynAny
                            public get_as_string(): string
                            public set_as_string(arg0: java.lang.String | string): void
                            public get_as_ulong(): int
                            public set_as_ulong(arg0: int): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}