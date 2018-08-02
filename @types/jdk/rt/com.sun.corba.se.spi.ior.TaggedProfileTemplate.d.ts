declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        interface TaggedProfileTemplate extends java.util.List , com.sun.corba.se.spi.ior.Identifiable , com.sun.corba.se.spi.ior.WriteContents , com.sun.corba.se.spi.ior.MakeImmutable {
                            iteratorById(arg0: int): java.util.Iterator
                            create(arg0: com.sun.corba.se.spi.ior.ObjectKeyTemplate, arg1: com.sun.corba.se.spi.ior.ObjectId): com.sun.corba.se.spi.ior.TaggedProfile
                            write(arg0: com.sun.corba.se.spi.ior.ObjectKeyTemplate, arg1: com.sun.corba.se.spi.ior.ObjectId, arg2: org.omg.CORBA_2_3.portable.OutputStream): void
                            isEquivalent(arg0: com.sun.corba.se.spi.ior.TaggedProfileTemplate): boolean
                            getIOPComponents(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int): org.omg.IOP.TaggedComponent[]
                        }
                    }
                }
            }
        }
    }
}