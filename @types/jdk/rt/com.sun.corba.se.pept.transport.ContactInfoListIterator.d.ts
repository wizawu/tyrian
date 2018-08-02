declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace transport {
                        interface ContactInfoListIterator extends java.util.Iterator {
                            getContactInfoList(): com.sun.corba.se.pept.transport.ContactInfoList
                            reportSuccess(arg0: com.sun.corba.se.pept.transport.ContactInfo): void
                            reportException(arg0: com.sun.corba.se.pept.transport.ContactInfo, arg1: java.lang.RuntimeException): boolean
                            getFailureException(): java.lang.RuntimeException
                        }
                    }
                }
            }
        }
    }
}