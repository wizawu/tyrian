declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace activation {
                        interface RepositoryOperations {
                            registerServer(arg0: com.sun.corba.se.spi.activation.RepositoryPackage.ServerDef): int
                            unregisterServer(arg0: int): void
                            getServer(arg0: int): com.sun.corba.se.spi.activation.RepositoryPackage.ServerDef
                            isInstalled(arg0: int): boolean
                            install(arg0: int): void
                            uninstall(arg0: int): void
                            listRegisteredServers(): int[]
                            getApplicationNames(): java.lang.String[]
                            getServerID(arg0: java.lang.String | string): int
                        }
                    }
                }
            }
        }
    }
}