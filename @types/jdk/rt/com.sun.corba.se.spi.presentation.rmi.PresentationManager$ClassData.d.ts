declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace presentation {
                        namespace rmi {
                            interface PresentationManager$ClassData {
                                getMyClass(): java.lang.Class
                                getIDLNameTranslator(): com.sun.corba.se.spi.presentation.rmi.IDLNameTranslator
                                getTypeIds(): java.lang.String[]
                                getInvocationHandlerFactory(): com.sun.corba.se.spi.orbutil.proxy.InvocationHandlerFactory
                                getDictionary(): java.util.Map
                            }
                        }
                    }
                }
            }
        }
    }
}