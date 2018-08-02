declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace naming {
                        namespace pcosnaming {
                            class NamingContextImpl extends org.omg.CosNaming.NamingContextExtPOA implements com.sun.corba.se.impl.naming.cosnaming.NamingContextDataStore , java.io.Serializable {
                                public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string, arg2: com.sun.corba.se.impl.naming.pcosnaming.NameService, arg3: com.sun.corba.se.impl.naming.pcosnaming.ServantManagerImpl)
                                public setRootNameService(arg0: com.sun.corba.se.impl.naming.pcosnaming.NameService): void
                                public setORB(arg0: com.sun.corba.se.spi.orb.ORB): void
                                public setServantManagerImpl(arg0: com.sun.corba.se.impl.naming.pcosnaming.ServantManagerImpl): void
                                public getNSPOA(): org.omg.PortableServer.POA
                                public bind(arg0: org.omg.CosNaming.NameComponent[], arg1: org.omg.CORBA.Object): void
                                public bind_context(arg0: org.omg.CosNaming.NameComponent[], arg1: org.omg.CosNaming.NamingContext): void
                                public rebind(arg0: org.omg.CosNaming.NameComponent[], arg1: org.omg.CORBA.Object): void
                                public rebind_context(arg0: org.omg.CosNaming.NameComponent[], arg1: org.omg.CosNaming.NamingContext): void
                                public resolve(arg0: org.omg.CosNaming.NameComponent[]): org.omg.CORBA.Object
                                public unbind(arg0: org.omg.CosNaming.NameComponent[]): void
                                public list(arg0: int, arg1: org.omg.CosNaming.BindingListHolder, arg2: org.omg.CosNaming.BindingIteratorHolder): void
                                public new_context(): org.omg.CosNaming.NamingContext
                                public bind_new_context(arg0: org.omg.CosNaming.NameComponent[]): org.omg.CosNaming.NamingContext
                                public destroy(): void
                                public static doResolve(arg0: com.sun.corba.se.impl.naming.cosnaming.NamingContextDataStore, arg1: org.omg.CosNaming.NameComponent[]): org.omg.CORBA.Object
                                public static doUnbind(arg0: com.sun.corba.se.impl.naming.cosnaming.NamingContextDataStore, arg1: org.omg.CosNaming.NameComponent[]): void
                                protected static resolveFirstAsContext(arg0: com.sun.corba.se.impl.naming.cosnaming.NamingContextDataStore, arg1: org.omg.CosNaming.NameComponent[]): org.omg.CosNaming.NamingContext
                                public static nameToString(arg0: org.omg.CosNaming.NameComponent[]): string
                                public Bind(arg0: org.omg.CosNaming.NameComponent, arg1: org.omg.CORBA.Object, arg2: org.omg.CosNaming.BindingType): void
                                public Resolve(arg0: org.omg.CosNaming.NameComponent, arg1: org.omg.CosNaming.BindingTypeHolder): org.omg.CORBA.Object
                                public Unbind(arg0: org.omg.CosNaming.NameComponent): org.omg.CORBA.Object
                                public List(arg0: int, arg1: org.omg.CosNaming.BindingListHolder, arg2: org.omg.CosNaming.BindingIteratorHolder): void
                                public NewContext(): org.omg.CosNaming.NamingContext
                                public Destroy(): void
                                public to_string(arg0: org.omg.CosNaming.NameComponent[]): string
                                public to_name(arg0: java.lang.String | string): org.omg.CosNaming.NameComponent[]
                                public to_url(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                public resolve_str(arg0: java.lang.String | string): org.omg.CORBA.Object
                                public IsEmpty(): boolean
                                public printSize(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}