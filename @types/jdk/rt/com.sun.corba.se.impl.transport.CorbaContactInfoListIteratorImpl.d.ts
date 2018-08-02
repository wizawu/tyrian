declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
class CorbaContactInfoListIteratorImpl implements com.sun.corba.se.spi.transport.CorbaContactInfoListIterator {
    protected orb: com.sun.corba.se.spi.orb.ORB
    protected contactInfoList: com.sun.corba.se.spi.transport.CorbaContactInfoList
    protected successContactInfo: com.sun.corba.se.spi.transport.CorbaContactInfo
    protected failureContactInfo: com.sun.corba.se.spi.transport.CorbaContactInfo
    protected failureException: java.lang.RuntimeException
    protected effectiveTargetIORIterator: java.util.Iterator
    protected previousContactInfo: com.sun.corba.se.spi.transport.CorbaContactInfo
    protected isAddrDispositionRetry: boolean
    protected primaryToContactInfo: com.sun.corba.se.spi.transport.IIOPPrimaryToContactInfo
    protected primaryContactInfo: com.sun.corba.se.pept.transport.ContactInfo
    protected listOfContactInfos: java.util.List
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.transport.CorbaContactInfoList, arg2: com.sun.corba.se.pept.transport.ContactInfo, arg3: java.util.List)
    public hasNext(): boolean
    public next(): java.lang.Object
    public remove(): void
    public getContactInfoList(): com.sun.corba.se.pept.transport.ContactInfoList
    public reportSuccess(arg0: com.sun.corba.se.pept.transport.ContactInfo): void
    public reportException(arg0: com.sun.corba.se.pept.transport.ContactInfo, arg1: java.lang.RuntimeException): boolean
    public getFailureException(): java.lang.RuntimeException
    public reportAddrDispositionRetry(arg0: com.sun.corba.se.spi.transport.CorbaContactInfo, arg1: short): void
    public reportRedirect(arg0: com.sun.corba.se.spi.transport.CorbaContactInfo, arg1: com.sun.corba.se.spi.ior.IOR): void
    public updateEffectiveTargetIOR(arg0: com.sun.corba.se.spi.ior.IOR): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}