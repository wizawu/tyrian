declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        interface TaggedComponentFactoryFinder extends com.sun.corba.se.spi.ior.IdentifiableFactoryFinder {
                            create(arg0: org.omg.CORBA.ORB, arg1: org.omg.IOP.TaggedComponent): com.sun.corba.se.spi.ior.TaggedComponent
                        }
                        interface TaggedComponentFactoryFinder$$Lambda extends com.sun.corba.se.spi.ior.IdentifiableFactoryFinder {
                            (arg0: org.omg.CORBA.ORB, arg1: org.omg.IOP.TaggedComponent): com.sun.corba.se.spi.ior.TaggedComponent
                        }
                    }
                }
            }
        }
    }
}