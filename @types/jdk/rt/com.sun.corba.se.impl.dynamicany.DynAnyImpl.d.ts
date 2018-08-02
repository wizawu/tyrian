declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace dynamicany {
                        abstract class DynAnyImpl extends org.omg.CORBA.LocalObject implements org.omg.DynamicAny.DynAny {
                            protected static NO_INDEX: int
                            protected static STATUS_DESTROYABLE: byte
                            protected static STATUS_UNDESTROYABLE: byte
                            protected static STATUS_DESTROYED: byte
                            protected orb: com.sun.corba.se.spi.orb.ORB
                            protected wrapper: com.sun.corba.se.impl.logging.ORBUtilSystemException
                            protected any: org.omg.CORBA.Any
                            protected status: byte
                            protected index: int
                            protected constructor()
                            protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.Any, arg2: boolean)
                            protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.TypeCode)
                            protected factory(): org.omg.DynamicAny.DynAnyFactory
                            protected getAny(): org.omg.CORBA.Any
                            protected getAny(arg0: org.omg.DynamicAny.DynAny): org.omg.CORBA.Any
                            protected writeAny(arg0: org.omg.CORBA.portable.OutputStream): void
                            protected setStatus(arg0: byte): void
                            protected clearData(): void
                            public type(): org.omg.CORBA.TypeCode
                            public assign(arg0: org.omg.DynamicAny.DynAny): void
                            public from_any(arg0: org.omg.CORBA.Any): void
                            public to_any(): org.omg.CORBA.Any
                            public equal(arg0: org.omg.DynamicAny.DynAny): boolean
                            public destroy(): void
                            public copy(): org.omg.DynamicAny.DynAny
                            public _ids(): java.lang.String[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}