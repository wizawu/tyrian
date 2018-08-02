declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace oa {
interface ObjectAdapterFactory {
    init(arg0: com.sun.corba.se.spi.orb.ORB): void
    shutdown(arg0: boolean): void
    find(arg0: com.sun.corba.se.spi.ior.ObjectAdapterId): com.sun.corba.se.spi.oa.ObjectAdapter
    getORB(): com.sun.corba.se.spi.orb.ORB
}

                    }
                }
            }
        }
    }
}