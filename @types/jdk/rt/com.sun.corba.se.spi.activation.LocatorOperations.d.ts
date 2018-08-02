declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace activation {
                        interface LocatorOperations {
                            locateServer(arg0: int, arg1: java.lang.String | string): com.sun.corba.se.spi.activation.LocatorPackage.ServerLocation
                            locateServerForORB(arg0: int, arg1: java.lang.String | string): com.sun.corba.se.spi.activation.LocatorPackage.ServerLocationPerORB
                            getEndpoint(arg0: java.lang.String | string): int
                            getServerPortForType(arg0: com.sun.corba.se.spi.activation.LocatorPackage.ServerLocationPerORB, arg1: java.lang.String | string): int
                        }
                    }
                }
            }
        }
    }
}