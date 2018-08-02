declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace activation {
class _RepositoryStub extends org.omg.CORBA.portable.ObjectImpl implements com.sun.corba.se.spi.activation.Repository {
    public constructor()
    public registerServer(arg0: com.sun.corba.se.spi.activation.RepositoryPackage.ServerDef): int
    public unregisterServer(arg0: int): void
    public getServer(arg0: int): com.sun.corba.se.spi.activation.RepositoryPackage.ServerDef
    public isInstalled(arg0: int): boolean
    public install(arg0: int): void
    public uninstall(arg0: int): void
    public listRegisteredServers(): int[]
    public getApplicationNames(): java.lang.String[]
    public getServerID(arg0: java.lang.String | string): int
    public _ids(): java.lang.String[]
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}