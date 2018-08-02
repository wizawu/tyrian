declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace activation {
                        interface ActivatorOperations {
                            active(arg0: int, arg1: com.sun.corba.se.spi.activation.Server): void
                            registerEndpoints(arg0: int, arg1: java.lang.String | string, arg2: com.sun.corba.se.spi.activation.EndPointInfo[]): void
                            getActiveServers(): int[]
                            activate(arg0: int): void
                            shutdown(arg0: int): void
                            install(arg0: int): void
                            getORBNames(arg0: int): java.lang.String[]
                            uninstall(arg0: int): void
                        }
                    }
                }
            }
        }
    }
}