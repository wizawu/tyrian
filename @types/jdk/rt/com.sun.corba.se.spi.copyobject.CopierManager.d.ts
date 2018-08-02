declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace copyobject {
                        interface CopierManager {
                            setDefaultId(arg0: int): void
                            getDefaultId(): int
                            getObjectCopierFactory(arg0: int): com.sun.corba.se.spi.copyobject.ObjectCopierFactory
                            getDefaultObjectCopierFactory(): com.sun.corba.se.spi.copyobject.ObjectCopierFactory
                            registerObjectCopierFactory(arg0: com.sun.corba.se.spi.copyobject.ObjectCopierFactory | com.sun.corba.se.spi.copyobject.ObjectCopierFactory$$Lambda, arg1: int): void
                        }
                    }
                }
            }
        }
    }
}