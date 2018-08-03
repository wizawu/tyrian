declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace activation {
                        class ServerManagerImpl extends com.sun.corba.se.spi.activation._ServerManagerImplBase implements com.sun.corba.se.impl.oa.poa.BadServerIdHandler {
                            public activate(arg0: int): void
                            public active(arg0: int, arg1: com.sun.corba.se.spi.activation.Server): void
                            public registerEndpoints(arg0: int, arg1: java.lang.String | string, arg2: com.sun.corba.se.spi.activation.EndPointInfo[]): void
                            public getActiveServers(): int[]
                            public shutdown(arg0: int): void
                            public getORBNames(arg0: int): java.lang.String[]
                            public install(arg0: int): void
                            public uninstall(arg0: int): void
                            public locateServer(arg0: int, arg1: java.lang.String | string): com.sun.corba.se.spi.activation.LocatorPackage.ServerLocation
                            public locateServerForORB(arg0: int, arg1: java.lang.String | string): com.sun.corba.se.spi.activation.LocatorPackage.ServerLocationPerORB
                            public handle(arg0: com.sun.corba.se.spi.ior.ObjectKey): void
                            public getEndpoint(arg0: java.lang.String | string): int
                            public getServerPortForType(arg0: com.sun.corba.se.spi.activation.LocatorPackage.ServerLocationPerORB, arg1: java.lang.String | string): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}