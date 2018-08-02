declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace poa {
class POAFactory implements com.sun.corba.se.spi.oa.ObjectAdapterFactory {
    public getWrapper(): com.sun.corba.se.impl.logging.POASystemException
    public constructor()
    public lookupPOA(arg0: org.omg.PortableServer.Servant): org.omg.PortableServer.POA
    public registerPOAForServant(arg0: org.omg.PortableServer.POA, arg1: org.omg.PortableServer.Servant): void
    public unregisterPOAForServant(arg0: org.omg.PortableServer.POA, arg1: org.omg.PortableServer.Servant): void
    public init(arg0: com.sun.corba.se.spi.orb.ORB): void
    public find(arg0: com.sun.corba.se.spi.ior.ObjectAdapterId): com.sun.corba.se.spi.oa.ObjectAdapter
    public shutdown(arg0: boolean): void
    public removePoaManager(arg0: org.omg.PortableServer.POAManager): void
    public addPoaManager(arg0: org.omg.PortableServer.POAManager): void
    public newPOAManagerId(): int
    public registerRootPOA(): void
    public getRootPOA(): org.omg.PortableServer.POA
    public getDelegateImpl(): org.omg.PortableServer.portable.Delegate
    public newPOAId(): int
    public getORB(): com.sun.corba.se.spi.orb.ORB
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}