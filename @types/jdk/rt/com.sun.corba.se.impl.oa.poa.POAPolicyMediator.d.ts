declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace poa {
                            interface POAPolicyMediator {
                                getPolicies(): com.sun.corba.se.impl.oa.poa.Policies
                                getScid(): int
                                getServerId(): int
                                getInvocationServant(arg0: byte[], arg1: java.lang.String | string): java.lang.Object
                                returnServant(): void
                                etherealizeAll(): void
                                clearAOM(): void
                                getServantManager(): org.omg.PortableServer.ServantManager
                                setServantManager(arg0: org.omg.PortableServer.ServantManager): void
                                getDefaultServant(): org.omg.PortableServer.Servant
                                setDefaultServant(arg0: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda): void
                                activateObject(arg0: byte[], arg1: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda): void
                                deactivateObject(arg0: byte[]): org.omg.PortableServer.Servant
                                newSystemId(): byte[]
                                servantToId(arg0: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda): byte[]
                                idToServant(arg0: byte[]): org.omg.PortableServer.Servant
                            }
                        }
                    }
                }
            }
        }
    }
}