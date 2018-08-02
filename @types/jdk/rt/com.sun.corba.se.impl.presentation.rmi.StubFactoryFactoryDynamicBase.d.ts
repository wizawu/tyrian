declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace presentation {
                        namespace rmi {
                            abstract class StubFactoryFactoryDynamicBase extends com.sun.corba.se.impl.presentation.rmi.StubFactoryFactoryBase {
                                protected wrapper: com.sun.corba.se.impl.logging.ORBUtilSystemException
                                public constructor()
                                public createStubFactory(arg0: java.lang.String | string, arg1: boolean, arg2: java.lang.String | string, arg3: java.lang.Class, arg4: java.lang.ClassLoader): com.sun.corba.se.spi.presentation.rmi.PresentationManager$StubFactory
                                public makeDynamicStubFactory(arg0: com.sun.corba.se.spi.presentation.rmi.PresentationManager, arg1: com.sun.corba.se.spi.presentation.rmi.PresentationManager$ClassData, arg2: java.lang.ClassLoader): com.sun.corba.se.spi.presentation.rmi.PresentationManager$StubFactory
                                public getTie(arg0: java.lang.Class): javax.rmi.CORBA.Tie
                                public createsDynamicStubs(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}