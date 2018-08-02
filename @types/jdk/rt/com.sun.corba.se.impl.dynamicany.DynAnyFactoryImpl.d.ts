declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace dynamicany {
                        class DynAnyFactoryImpl extends org.omg.CORBA.LocalObject implements org.omg.DynamicAny.DynAnyFactory {
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                            public create_dyn_any(arg0: org.omg.CORBA.Any): org.omg.DynamicAny.DynAny
                            public create_dyn_any_from_type_code(arg0: org.omg.CORBA.TypeCode): org.omg.DynamicAny.DynAny
                            public _ids(): java.lang.String[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}