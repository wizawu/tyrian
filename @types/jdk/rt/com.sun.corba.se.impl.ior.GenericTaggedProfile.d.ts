declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
                        class GenericTaggedProfile extends com.sun.corba.se.impl.ior.GenericIdentifiable implements com.sun.corba.se.spi.ior.TaggedProfile {
                            public constructor(arg0: int, arg1: org.omg.CORBA_2_3.portable.InputStream)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int, arg2: byte[])
                            public getTaggedProfileTemplate(): com.sun.corba.se.spi.ior.TaggedProfileTemplate
                            public getObjectId(): com.sun.corba.se.spi.ior.ObjectId
                            public getObjectKeyTemplate(): com.sun.corba.se.spi.ior.ObjectKeyTemplate
                            public getObjectKey(): com.sun.corba.se.spi.ior.ObjectKey
                            public isEquivalent(arg0: com.sun.corba.se.spi.ior.TaggedProfile): boolean
                            public makeImmutable(): void
                            public isLocal(): boolean
                            public getIOPProfile(): org.omg.IOP.TaggedProfile
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}