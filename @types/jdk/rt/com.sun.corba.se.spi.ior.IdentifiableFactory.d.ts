declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        interface IdentifiableFactory {
                            getId(): int
                            create(arg0: org.omg.CORBA_2_3.portable.InputStream): com.sun.corba.se.spi.ior.Identifiable
                        }
                    }
                }
            }
        }
    }
}