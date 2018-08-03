declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace poa {
                            class POAPolicyMediatorImpl_R_USM extends com.sun.corba.se.impl.oa.poa.POAPolicyMediatorBase_R {
                                protected activator: org.omg.PortableServer.ServantActivator
                                protected internalGetServant(arg0: byte[], arg1: java.lang.String | string): java.lang.Object
                                public returnServant(): void
                                public etherealizeAll(): void
                                public getServantManager(): org.omg.PortableServer.ServantManager
                                public setServantManager(arg0: org.omg.PortableServer.ServantManager): void
                                public getDefaultServant(): org.omg.PortableServer.Servant
                                public setDefaultServant(arg0: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda): void
                                public deactivateHelper(arg0: com.sun.corba.se.impl.oa.poa.ActiveObjectMap$Key, arg1: com.sun.corba.se.impl.oa.poa.AOMEntry, arg2: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda): void
                                public idToServant(arg0: byte[]): org.omg.PortableServer.Servant
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}