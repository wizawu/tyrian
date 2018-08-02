declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace activation {
class ORBD {
    protected dbDir: java.io.File
    protected locator: com.sun.corba.se.spi.activation.Locator
    protected activator: com.sun.corba.se.spi.activation.Activator
    protected repository: com.sun.corba.se.impl.activation.RepositoryImpl
    public constructor()
    protected initializeBootNaming(arg0: com.sun.corba.se.spi.orb.ORB): void
    protected createORB(arg0: java.lang.String[]): com.sun.corba.se.spi.orb.ORB
    protected createSystemDirs(arg0: java.lang.String | string): boolean
    protected getDbDir(): java.io.File
    protected getDbDirName(): string
    protected startActivationObjects(arg0: com.sun.corba.se.spi.orb.ORB): void
    protected getLocator(): com.sun.corba.se.spi.activation.Locator
    protected getActivator(): com.sun.corba.se.spi.activation.Activator
    protected getRepository(): com.sun.corba.se.impl.activation.RepositoryImpl
    protected installOrbServers(arg0: com.sun.corba.se.impl.activation.RepositoryImpl, arg1: com.sun.corba.se.spi.activation.Activator): void
    public static main(arg0: java.lang.String[]): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}