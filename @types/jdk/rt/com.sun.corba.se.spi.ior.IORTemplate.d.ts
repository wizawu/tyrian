declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        interface IORTemplate extends java.util.List , com.sun.corba.se.spi.ior.IORFactory , com.sun.corba.se.spi.ior.MakeImmutable {
                            iteratorById(arg0: int): java.util.Iterator
                            getObjectKeyTemplate(): com.sun.corba.se.spi.ior.ObjectKeyTemplate
                        }
                    }
                }
            }
        }
    }
}