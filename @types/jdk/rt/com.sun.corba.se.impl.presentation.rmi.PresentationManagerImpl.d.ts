declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace presentation {
                        namespace rmi {
class PresentationManagerImpl implements com.sun.corba.se.spi.presentation.rmi.PresentationManager {
    public constructor(arg0: boolean)
    public getDynamicMethodMarshaller(arg0: java.lang.reflect.Method): com.sun.corba.se.spi.presentation.rmi.DynamicMethodMarshaller
    public getClassData(arg0: java.lang.Class): com.sun.corba.se.spi.presentation.rmi.PresentationManager$ClassData
    public getStubFactoryFactory(arg0: boolean): com.sun.corba.se.spi.presentation.rmi.PresentationManager$StubFactoryFactory
    public setStubFactoryFactory(arg0: boolean, arg1: com.sun.corba.se.spi.presentation.rmi.PresentationManager$StubFactoryFactory): void
    public getTie(): javax.rmi.CORBA.Tie
    public useDynamicStubs(): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}