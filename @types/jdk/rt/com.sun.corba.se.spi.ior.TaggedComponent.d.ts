declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        interface TaggedComponent extends com.sun.corba.se.spi.ior.Identifiable {
                            getIOPComponent(arg0: org.omg.CORBA.ORB): org.omg.IOP.TaggedComponent
                        }
                        interface TaggedComponent$$Lambda extends com.sun.corba.se.spi.ior.Identifiable {
                            (arg0: org.omg.CORBA.ORB): org.omg.IOP.TaggedComponent
                        }
                    }
                }
            }
        }
    }
}