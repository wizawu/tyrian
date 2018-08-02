declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace toa {
                            class TOAImpl extends com.sun.corba.se.spi.oa.ObjectAdapterBase implements com.sun.corba.se.impl.oa.toa.TOA {
                                public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.impl.oa.toa.TransientObjectManager, arg2: java.lang.String | string)
                                public getObjectCopierFactory(): com.sun.corba.se.spi.copyobject.ObjectCopierFactory
                                public getLocalServant(arg0: byte[]): org.omg.CORBA.Object
                                public getInvocationServant(arg0: com.sun.corba.se.spi.oa.OAInvocationInfo): void
                                public returnServant(): void
                                public getInterfaces(arg0: java.lang.Object, arg1: byte[]): java.lang.String[]
                                public getEffectivePolicy(arg0: int): org.omg.CORBA.Policy
                                public getManagerId(): int
                                public getState(): short
                                public enter(): void
                                public exit(): void
                                public connect(arg0: org.omg.CORBA.Object): void
                                public disconnect(arg0: org.omg.CORBA.Object): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}