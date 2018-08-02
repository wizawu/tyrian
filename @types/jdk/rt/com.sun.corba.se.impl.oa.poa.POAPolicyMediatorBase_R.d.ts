declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace poa {
                            abstract class POAPolicyMediatorBase_R extends com.sun.corba.se.impl.oa.poa.POAPolicyMediatorBase {
                                protected activeObjectMap: com.sun.corba.se.impl.oa.poa.ActiveObjectMap
                                public returnServant(): void
                                public clearAOM(): void
                                protected internalKeyToServant(arg0: com.sun.corba.se.impl.oa.poa.ActiveObjectMap$Key): org.omg.PortableServer.Servant
                                protected internalIdToServant(arg0: byte[]): org.omg.PortableServer.Servant
                                protected activateServant(arg0: com.sun.corba.se.impl.oa.poa.ActiveObjectMap$Key, arg1: com.sun.corba.se.impl.oa.poa.AOMEntry, arg2: org.omg.PortableServer.Servant): void
                                public activateObject(arg0: byte[], arg1: org.omg.PortableServer.Servant): void
                                public deactivateObject(arg0: byte[]): org.omg.PortableServer.Servant
                                protected deactivateHelper(arg0: com.sun.corba.se.impl.oa.poa.ActiveObjectMap$Key, arg1: com.sun.corba.se.impl.oa.poa.AOMEntry, arg2: org.omg.PortableServer.Servant): void
                                public deactivateObject(arg0: com.sun.corba.se.impl.oa.poa.ActiveObjectMap$Key): org.omg.PortableServer.Servant
                                public servantToId(arg0: org.omg.PortableServer.Servant): byte[]
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}