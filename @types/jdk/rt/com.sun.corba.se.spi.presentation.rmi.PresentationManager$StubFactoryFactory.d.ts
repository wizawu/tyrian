declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace presentation {
                        namespace rmi {
interface PresentationManager$StubFactoryFactory {
    getStubName(arg0: java.lang.String | string): string
    createStubFactory(arg0: java.lang.String | string, arg1: boolean, arg2: java.lang.String | string, arg3: java.lang.Class, arg4: java.lang.ClassLoader): com.sun.corba.se.spi.presentation.rmi.PresentationManager$StubFactory
    getTie(arg0: java.lang.Class): javax.rmi.CORBA.Tie
    createsDynamicStubs(): boolean
}

                        }
                    }
                }
            }
        }
    }
}