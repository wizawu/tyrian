declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace dynamicany {
                        abstract class DynAnyComplexImpl extends com.sun.corba.se.impl.dynamicany.DynAnyConstructedImpl {
                            protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.Any, arg2: boolean)
                            protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.TypeCode)
                            public current_member_name(): string
                            public current_member_kind(): org.omg.CORBA.TCKind
                            public set_members(arg0: org.omg.DynamicAny.NameValuePair[]): void
                            public set_members_as_dyn_any(arg0: org.omg.DynamicAny.NameDynAnyPair[]): void
                            protected initializeComponentsFromAny(): boolean
                            protected initializeComponentsFromTypeCode(): boolean
                            protected clearData(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}