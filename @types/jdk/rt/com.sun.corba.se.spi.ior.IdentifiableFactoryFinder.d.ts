declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
interface IdentifiableFactoryFinder {
    create(arg0: int, arg1: org.omg.CORBA_2_3.portable.InputStream): com.sun.corba.se.spi.ior.Identifiable
    registerFactory(arg0: com.sun.corba.se.spi.ior.IdentifiableFactory): void
}

                    }
                }
            }
        }
    }
}