declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace legacy {
                        namespace connection {
                            interface LegacyServerSocketManager {
                                legacyGetTransientServerPort(arg0: java.lang.String | string): int
                                legacyGetPersistentServerPort(arg0: java.lang.String | string): int
                                legacyGetTransientOrPersistentServerPort(arg0: java.lang.String | string): int
                                legacyGetEndpoint(arg0: java.lang.String | string): com.sun.corba.se.spi.legacy.connection.LegacyServerSocketEndPointInfo
                                legacyIsLocalServerPort(arg0: int): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}