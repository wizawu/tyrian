declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
class IORImpl extends com.sun.corba.se.spi.ior.IdentifiableContainerBase implements com.sun.corba.se.spi.ior.IOR {
    public getORB(): com.sun.corba.se.spi.orb.ORB
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string)
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string, arg2: com.sun.corba.se.spi.ior.IORTemplate, arg3: com.sun.corba.se.spi.ior.ObjectId)
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string, arg2: com.sun.corba.se.spi.ior.IORTemplateList, arg3: com.sun.corba.se.spi.ior.ObjectId)
    public constructor(arg0: org.omg.CORBA_2_3.portable.InputStream)
    public getTypeId(): string
    public write(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
    public stringify(): string
    public makeImmutable(): void
    public getIOPIOR(): org.omg.IOP.IOR
    public isNil(): boolean
    public isEquivalent(arg0: com.sun.corba.se.spi.ior.IOR): boolean
    public getIORTemplates(): com.sun.corba.se.spi.ior.IORTemplateList
    public getProfile(): com.sun.corba.se.spi.ior.iiop.IIOPProfile
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}