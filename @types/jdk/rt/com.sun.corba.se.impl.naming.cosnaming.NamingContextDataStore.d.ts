declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace naming {
                        namespace cosnaming {
                            interface NamingContextDataStore {
                                Bind(arg0: org.omg.CosNaming.NameComponent, arg1: org.omg.CORBA.Object, arg2: org.omg.CosNaming.BindingType): void
                                Resolve(arg0: org.omg.CosNaming.NameComponent, arg1: org.omg.CosNaming.BindingTypeHolder): org.omg.CORBA.Object
                                Unbind(arg0: org.omg.CosNaming.NameComponent): org.omg.CORBA.Object
                                List(arg0: int, arg1: org.omg.CosNaming.BindingListHolder, arg2: org.omg.CosNaming.BindingIteratorHolder): void
                                NewContext(): org.omg.CosNaming.NamingContext
                                Destroy(): void
                                IsEmpty(): boolean
                                getNSPOA(): org.omg.PortableServer.POA
                            }
                        }
                    }
                }
            }
        }
    }
}