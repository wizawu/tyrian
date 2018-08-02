declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace dynamicany {
                        abstract class DynAnyCollectionImpl extends com.sun.corba.se.impl.dynamicany.DynAnyConstructedImpl {
                            protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.Any, arg2: boolean)
                            protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.TypeCode)
                            protected createDefaultComponentAt(arg0: int, arg1: org.omg.CORBA.TypeCode): void
                            protected getContentType(): org.omg.CORBA.TypeCode
                            protected getBound(): int
                            public get_elements(): org.omg.CORBA.Any[]
                            protected checkValue(arg0: java.lang.Object[]): void
                            public set_elements(arg0: org.omg.CORBA.Any[]): void
                            public get_elements_as_dyn_any(): org.omg.DynamicAny.DynAny[]
                            public set_elements_as_dyn_any(arg0: org.omg.DynamicAny.DynAny[]): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}