declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace naming {
                        namespace cosnaming {
                            class TransientNamingContext extends com.sun.corba.se.impl.naming.cosnaming.NamingContextImpl implements com.sun.corba.se.impl.naming.cosnaming.NamingContextDataStore {
                                public localRoot: org.omg.CORBA.Object
                                public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.Object, arg2: org.omg.PortableServer.POA)
                                public Bind(arg0: org.omg.CosNaming.NameComponent, arg1: org.omg.CORBA.Object, arg2: org.omg.CosNaming.BindingType): void
                                public Resolve(arg0: org.omg.CosNaming.NameComponent, arg1: org.omg.CosNaming.BindingTypeHolder): org.omg.CORBA.Object
                                public Unbind(arg0: org.omg.CosNaming.NameComponent): org.omg.CORBA.Object
                                public List(arg0: int, arg1: org.omg.CosNaming.BindingListHolder, arg2: org.omg.CosNaming.BindingIteratorHolder): void
                                public NewContext(): org.omg.CosNaming.NamingContext
                                public Destroy(): void
                                public IsEmpty(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}