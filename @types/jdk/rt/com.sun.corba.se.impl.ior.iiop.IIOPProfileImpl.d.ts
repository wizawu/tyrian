declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
                        namespace iiop {
                            class IIOPProfileImpl extends com.sun.corba.se.spi.ior.IdentifiableBase implements com.sun.corba.se.spi.ior.iiop.IIOPProfile {
                                protected codebase: string
                                protected cachedCodebase: boolean
                                public equals(arg0: java.lang.Object): boolean
                                public hashCode(): int
                                public getObjectId(): com.sun.corba.se.spi.ior.ObjectId
                                public getTaggedProfileTemplate(): com.sun.corba.se.spi.ior.TaggedProfileTemplate
                                public getObjectKeyTemplate(): com.sun.corba.se.spi.ior.ObjectKeyTemplate
                                public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.ObjectKeyTemplate, arg2: com.sun.corba.se.spi.ior.ObjectId | com.sun.corba.se.spi.ior.ObjectId$$Lambda, arg3: com.sun.corba.se.spi.ior.iiop.IIOPProfileTemplate)
                                public constructor(arg0: org.omg.CORBA_2_3.portable.InputStream)
                                public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.IOP.TaggedProfile)
                                public writeContents(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
                                public getId(): int
                                public isEquivalent(arg0: com.sun.corba.se.spi.ior.TaggedProfile): boolean
                                public getObjectKey(): com.sun.corba.se.spi.ior.ObjectKey
                                public getIOPProfile(): org.omg.IOP.TaggedProfile
                                public getCodebase(): string
                                public getORBVersion(): com.sun.corba.se.spi.orb.ORBVersion
                                public isLocal(): boolean
                                public getServant(): java.lang.Object
                                public getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
                                public makeImmutable(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}