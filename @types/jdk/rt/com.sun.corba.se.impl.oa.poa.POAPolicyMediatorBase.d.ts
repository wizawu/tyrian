declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace poa {
                            abstract class POAPolicyMediatorBase implements com.sun.corba.se.impl.oa.poa.POAPolicyMediator {
                                protected poa: com.sun.corba.se.impl.oa.poa.POAImpl
                                protected orb: com.sun.corba.se.spi.orb.ORB
                                protected isImplicit: boolean
                                protected isUnique: boolean
                                protected isSystemId: boolean
                                public getPolicies(): com.sun.corba.se.impl.oa.poa.Policies
                                public getScid(): int
                                public getServerId(): int
                                public getInvocationServant(arg0: byte[], arg1: java.lang.String | string): java.lang.Object
                                protected setDelegate(arg0: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda, arg1: byte[]): void
                                public newSystemId(): byte[]
                                protected abstract internalGetServant(arg0: byte[], arg1: java.lang.String | string): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                            interface POAPolicyMediatorBase$$Lambda implements com.sun.corba.se.impl.oa.poa.POAPolicyMediator {
                                (arg0: byte[], arg1: java.lang.String | string): java.lang.Object
                            }
                        }
                    }
                }
            }
        }
    }
}