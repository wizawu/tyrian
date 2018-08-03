declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
                        abstract class IdentifiableFactoryFinderBase implements com.sun.corba.se.spi.ior.IdentifiableFactoryFinder {
                            protected wrapper: com.sun.corba.se.impl.logging.IORSystemException
                            protected constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                            protected getFactory(arg0: int): com.sun.corba.se.spi.ior.IdentifiableFactory
                            public abstract handleMissingFactory(arg0: int, arg1: org.omg.CORBA_2_3.portable.InputStream): com.sun.corba.se.spi.ior.Identifiable
                            public create(arg0: int, arg1: org.omg.CORBA_2_3.portable.InputStream): com.sun.corba.se.spi.ior.Identifiable
                            public registerFactory(arg0: com.sun.corba.se.spi.ior.IdentifiableFactory): void
                            public static class: java.lang.Class<any>
                        }
                        interface IdentifiableFactoryFinderBase$$Lambda implements com.sun.corba.se.spi.ior.IdentifiableFactoryFinder {
                            (arg0: int, arg1: org.omg.CORBA_2_3.portable.InputStream): com.sun.corba.se.spi.ior.Identifiable
                        }
                    }
                }
            }
        }
    }
}