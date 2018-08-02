declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        abstract class EncapsulationFactoryBase implements com.sun.corba.se.spi.ior.IdentifiableFactory {
                            public getId(): int
                            public constructor(arg0: int)
                            public create(arg0: org.omg.CORBA_2_3.portable.InputStream): com.sun.corba.se.spi.ior.Identifiable
                            protected readContents(arg0: org.omg.CORBA_2_3.portable.InputStream): com.sun.corba.se.spi.ior.Identifiable
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}