declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
                        namespace iiop {
class IIOPProfileTemplateImpl extends com.sun.corba.se.spi.ior.TaggedProfileTemplateBase implements com.sun.corba.se.spi.ior.iiop.IIOPProfileTemplate {
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public create(arg0: com.sun.corba.se.spi.ior.ObjectKeyTemplate, arg1: com.sun.corba.se.spi.ior.ObjectId): com.sun.corba.se.spi.ior.TaggedProfile
    public getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
    public getPrimaryAddress(): com.sun.corba.se.spi.ior.iiop.IIOPAddress
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg2: com.sun.corba.se.spi.ior.iiop.IIOPAddress)
    public constructor(arg0: org.omg.CORBA_2_3.portable.InputStream)
    public write(arg0: com.sun.corba.se.spi.ior.ObjectKeyTemplate, arg1: com.sun.corba.se.spi.ior.ObjectId, arg2: org.omg.CORBA_2_3.portable.OutputStream): void
    public writeContents(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
    public getId(): int
    public isEquivalent(arg0: com.sun.corba.se.spi.ior.TaggedProfileTemplate): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}