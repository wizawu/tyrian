declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace transport {
interface IIOPPrimaryToContactInfo {
    reset(arg0: com.sun.corba.se.pept.transport.ContactInfo): void
    hasNext(arg0: com.sun.corba.se.pept.transport.ContactInfo, arg1: com.sun.corba.se.pept.transport.ContactInfo, arg2: java.util.List): boolean
    next(arg0: com.sun.corba.se.pept.transport.ContactInfo, arg1: com.sun.corba.se.pept.transport.ContactInfo, arg2: java.util.List): com.sun.corba.se.pept.transport.ContactInfo
}

                    }
                }
            }
        }
    }
}