declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace copyobject {
                        class CopierManagerImpl implements com.sun.corba.se.spi.copyobject.CopierManager {
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                            public setDefaultId(arg0: int): void
                            public getDefaultId(): int
                            public getObjectCopierFactory(arg0: int): com.sun.corba.se.spi.copyobject.ObjectCopierFactory
                            public getDefaultObjectCopierFactory(): com.sun.corba.se.spi.copyobject.ObjectCopierFactory
                            public registerObjectCopierFactory(arg0: com.sun.corba.se.spi.copyobject.ObjectCopierFactory | com.sun.corba.se.spi.copyobject.ObjectCopierFactory$$Lambda, arg1: int): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}