declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace toa {
                            class TransientObjectManager {
                                public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                                public storeServant(arg0: java.lang.Object, arg1: java.lang.Object): byte[]
                                public lookupServant(arg0: byte[]): java.lang.Object
                                public lookupServantData(arg0: byte[]): java.lang.Object
                                public deleteServant(arg0: byte[]): void
                                public getKey(arg0: java.lang.Object): byte[]
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}