declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace activation {
                        class RepositoryImpl extends com.sun.corba.se.spi.activation._RepositoryImplBase implements java.io.Serializable {
                            public registerServer(arg0: com.sun.corba.se.spi.activation.RepositoryPackage.ServerDef, arg1: int): int
                            public registerServer(arg0: com.sun.corba.se.spi.activation.RepositoryPackage.ServerDef): int
                            public unregisterServer(arg0: int): void
                            public getServer(arg0: int): com.sun.corba.se.spi.activation.RepositoryPackage.ServerDef
                            public isInstalled(arg0: int): boolean
                            public install(arg0: int): void
                            public uninstall(arg0: int): void
                            public listRegisteredServers(): int[]
                            public getServerID(arg0: java.lang.String | string): int
                            public getApplicationNames(): java.lang.String[]
                            public static main(arg0: java.lang.String[]): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}