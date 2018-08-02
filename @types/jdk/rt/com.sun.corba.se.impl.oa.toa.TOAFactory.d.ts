declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace toa {
                            class TOAFactory implements com.sun.corba.se.spi.oa.ObjectAdapterFactory {
                                public constructor()
                                public find(arg0: com.sun.corba.se.spi.ior.ObjectAdapterId): com.sun.corba.se.spi.oa.ObjectAdapter
                                public init(arg0: com.sun.corba.se.spi.orb.ORB): void
                                public shutdown(arg0: boolean): void
                                public getTOA(arg0: java.lang.String | string): com.sun.corba.se.impl.oa.toa.TOA
                                public getTOA(): com.sun.corba.se.impl.oa.toa.TOA
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