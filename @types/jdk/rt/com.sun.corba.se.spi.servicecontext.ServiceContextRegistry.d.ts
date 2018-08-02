declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace servicecontext {
                        class ServiceContextRegistry {
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                            public register(arg0: java.lang.Class): void
                            public findServiceContextData(arg0: int): com.sun.corba.se.spi.servicecontext.ServiceContextData
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}