declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace presentation {
                        namespace rmi {
                            interface PresentationManager {
                                getClassData(arg0: java.lang.Class): com.sun.corba.se.spi.presentation.rmi.PresentationManager$ClassData
                                getDynamicMethodMarshaller(arg0: java.lang.reflect.Method): com.sun.corba.se.spi.presentation.rmi.DynamicMethodMarshaller
                                getStubFactoryFactory(arg0: boolean): com.sun.corba.se.spi.presentation.rmi.PresentationManager$StubFactoryFactory
                                setStubFactoryFactory(arg0: boolean, arg1: com.sun.corba.se.spi.presentation.rmi.PresentationManager$StubFactoryFactory): void
                                getTie(): javax.rmi.CORBA.Tie
                                useDynamicStubs(): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}