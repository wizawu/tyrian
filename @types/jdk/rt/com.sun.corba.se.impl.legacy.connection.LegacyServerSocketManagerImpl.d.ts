declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace legacy {
                        namespace connection {
                            class LegacyServerSocketManagerImpl implements com.sun.corba.se.spi.legacy.connection.LegacyServerSocketManager {
                                protected orb: com.sun.corba.se.spi.orb.ORB
                                public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                                public legacyGetTransientServerPort(arg0: java.lang.String | string): int
                                public legacyGetPersistentServerPort(arg0: java.lang.String | string): int
                                public legacyGetTransientOrPersistentServerPort(arg0: java.lang.String | string): int
                                public legacyGetEndpoint(arg0: java.lang.String | string): com.sun.corba.se.spi.legacy.connection.LegacyServerSocketEndPointInfo
                                public legacyIsLocalServerPort(arg0: int): boolean
                                protected dprint(arg0: java.lang.String | string): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}