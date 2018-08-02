declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
class CorbaContactInfoListImpl implements com.sun.corba.se.spi.transport.CorbaContactInfoList {
    protected orb: com.sun.corba.se.spi.orb.ORB
    protected LocalClientRequestDispatcher: com.sun.corba.se.spi.protocol.LocalClientRequestDispatcher
    protected targetIOR: com.sun.corba.se.spi.ior.IOR
    protected effectiveTargetIOR: com.sun.corba.se.spi.ior.IOR
    protected effectiveTargetIORContactInfoList: java.util.List
    protected primaryContactInfo: com.sun.corba.se.pept.transport.ContactInfo
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.IOR)
    public iterator(): java.util.Iterator
    public setTargetIOR(arg0: com.sun.corba.se.spi.ior.IOR): void
    public getTargetIOR(): com.sun.corba.se.spi.ior.IOR
    public setEffectiveTargetIOR(arg0: com.sun.corba.se.spi.ior.IOR): void
    public getEffectiveTargetIOR(): com.sun.corba.se.spi.ior.IOR
    public getLocalClientRequestDispatcher(): com.sun.corba.se.spi.protocol.LocalClientRequestDispatcher
    public hashCode(): int
    protected createContactInfoList(): void
    protected addRemoteContactInfos(arg0: com.sun.corba.se.spi.ior.IOR, arg1: java.util.List): void
    protected createContactInfo(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): com.sun.corba.se.pept.transport.ContactInfo
    protected setLocalSubcontract(): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}