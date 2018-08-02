declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace transport {
interface CorbaContactInfoListIterator extends com.sun.corba.se.pept.transport.ContactInfoListIterator {
    reportAddrDispositionRetry(arg0: com.sun.corba.se.spi.transport.CorbaContactInfo, arg1: short): void
    reportRedirect(arg0: com.sun.corba.se.spi.transport.CorbaContactInfo, arg1: com.sun.corba.se.spi.ior.IOR): void
}

                    }
                }
            }
        }
    }
}