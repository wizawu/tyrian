declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace poa {
                            class POAPolicyMediatorImpl_NR_USM extends com.sun.corba.se.impl.oa.poa.POAPolicyMediatorBase {
                                protected internalGetServant(arg0: byte[], arg1: java.lang.String | string): java.lang.Object
                                public returnServant(): void
                                public etherealizeAll(): void
                                public clearAOM(): void
                                public getServantManager(): org.omg.PortableServer.ServantManager
                                public setServantManager(arg0: org.omg.PortableServer.ServantManager): void
                                public getDefaultServant(): org.omg.PortableServer.Servant
                                public setDefaultServant(arg0: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda): void
                                public activateObject(arg0: byte[], arg1: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda): void
                                public deactivateObject(arg0: byte[]): org.omg.PortableServer.Servant
                                public servantToId(arg0: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda): byte[]
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