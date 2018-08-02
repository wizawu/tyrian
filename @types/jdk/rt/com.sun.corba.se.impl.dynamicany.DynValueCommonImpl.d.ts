declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace dynamicany {
abstract class DynValueCommonImpl extends com.sun.corba.se.impl.dynamicany.DynAnyComplexImpl implements org.omg.DynamicAny.DynValueCommon {
    protected isNull: boolean
    protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.Any, arg2: boolean)
    protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.TypeCode)
    public is_null(): boolean
    public set_to_null(): void
    public set_to_value(): void
    public get_members(): org.omg.DynamicAny.NameValuePair[]
    public get_members_as_dyn_any(): org.omg.DynamicAny.NameDynAnyPair[]
    public set_members(arg0: org.omg.DynamicAny.NameValuePair[]): void
    public set_members_as_dyn_any(arg0: org.omg.DynamicAny.NameDynAnyPair[]): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}