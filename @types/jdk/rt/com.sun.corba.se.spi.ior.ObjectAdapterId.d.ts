declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        interface ObjectAdapterId extends com.sun.corba.se.spi.ior.Writeable {
                            getNumLevels(): int
                            iterator(): java.util.Iterator
                            getAdapterName(): java.lang.String[]
                        }
                    }
                }
            }
        }
    }
}