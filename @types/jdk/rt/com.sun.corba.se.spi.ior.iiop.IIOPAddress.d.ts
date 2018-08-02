declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        namespace iiop {
interface IIOPAddress extends com.sun.corba.se.spi.ior.Writeable {
    getHost(): string
    getPort(): int
}

                        }
                    }
                }
            }
        }
    }
}