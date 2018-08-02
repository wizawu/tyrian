declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
interface TaggedProfile extends com.sun.corba.se.spi.ior.Identifiable , com.sun.corba.se.spi.ior.MakeImmutable {
    getTaggedProfileTemplate(): com.sun.corba.se.spi.ior.TaggedProfileTemplate
    getObjectId(): com.sun.corba.se.spi.ior.ObjectId
    getObjectKeyTemplate(): com.sun.corba.se.spi.ior.ObjectKeyTemplate
    getObjectKey(): com.sun.corba.se.spi.ior.ObjectKey
    isEquivalent(arg0: com.sun.corba.se.spi.ior.TaggedProfile): boolean
    getIOPProfile(): org.omg.IOP.TaggedProfile
    isLocal(): boolean
}

                    }
                }
            }
        }
    }
}